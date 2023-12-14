using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.CognitiveServices.ContentModerator;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using webapi.event_.Domains;
using webapi.event_.Repositories;

namespace webapi.event_.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class ComentariosEventoController : ControllerBase
    {
        ComentariosEventoRepository comentario = new ComentariosEventoRepository();

        //variavél que armazena os dados do servíço da api externa- IA AZURE

        private readonly ContentModeratorClient _contentModeratorClient;
        //Post com a IA

        /// <summary>
        /// Construtor que recebe os dados necessários para acesso ao serviço externo 
        /// </summary>
        /// <param name="contentModeratorClient">objeto do tipo ContentModeratorClient</param>
        public ComentariosEventoController(ContentModeratorClient contentModeratorClient)
        {
            _contentModeratorClient = contentModeratorClient;
        }

        //função assincrona para esperar a resposta da api
        [HttpPost("ComentarioIA")]
        public async Task<IActionResult> PostIA(ComentariosEvento novoComentario)
        {
            try
            {
                if ((novoComentario.Descricao).IsNullOrEmpty())
                {
                    return BadRequest("A Descrição do comentário não pode estar vazia ou nulo!");
                }

                //armazena a descrição do comentario na mémoria
                using var stream = new MemoryStream(Encoding.UTF8.GetBytes(novoComentario.Descricao));

                //chama a moderação do conteúdo > acessa o serviço de moderação de texto > e guarda na variavél
                var moderationResult = await _contentModeratorClient.TextModeration
                    .ScreenTextAsync("text/plain", stream, "por", false, false, null, true);

                if(moderationResult.Terms != null ){

                    novoComentario.Exibe = false;

                    comentario.Cadastrar(novoComentario);
                }

                else
                {
                    novoComentario.Exibe = true;

                    comentario.Cadastrar(novoComentario);

                }
                return StatusCode(201, novoComentario);
            }
            catch(Exception e)      
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet]
        public IActionResult Get(Guid id)
        {
            try
            {
                return Ok(comentario.Listar(id));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("ListarSomenteExibe")]
        public IActionResult GetShow(Guid id)
        {
            try
            {
                return Ok(comentario.ListarSomenteExibe(id));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("BuscarPorIdUsuario")]
        public IActionResult Get(Guid idUsuario, Guid idEvento)
        {
            try
            {
                return Ok(comentario.BuscarPorIdUsuario(idUsuario, idEvento));
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);

            }
        }

        [HttpPost]
        public IActionResult Post(ComentariosEvento novoComentario)
        {
            try
            {
                comentario.Cadastrar(novoComentario);
                return StatusCode(201, novoComentario);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        [HttpDelete("{id}")]
        public IActionResult Delete(Guid id)
        {
            try
            {
                comentario.Deletar(id);
                return NoContent();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
