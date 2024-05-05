const primeiraNota = document.getElementById('primeira');
const segundaNota = document.getElementById('segunda');
const terceiraNota = document.getElementById('terceira');
const somaButton = document.getElementById('somar');
const mediaButton = document.getElementById('calcularMedia');
const resultadoSoma = document.getElementById('soma');
const resultadoMedia = document.getElementById('media');
const resultadoDiv = document.getElementById('resultado');

function validarCampos() {
  const primeira = parseFloat(primeiraNota.value);
  const segunda = parseFloat(segundaNota.value);
  const terceira = parseFloat(terceiraNota.value);
  const nome = document.getElementById('nome');

  if (!nome.value || isNaN(primeira) || isNaN(segunda) || isNaN(terceira)) {
    alert('Preencha todos os campos corretamente!');
    return false;
  }

  if (primeira < 0 || primeira > 100 || segunda < 0 || segunda > 100 || terceira < 0 || terceira > 100) {
    alert('As notas devem estar entre 0 e 100!');
    return false;
  }

  return true;
}

function soma() {
  if (!validarCampos()) return;

  const primeira = parseFloat(primeiraNota.value);
  const segunda = parseFloat(segundaNota.value);
  const terceira = parseFloat(terceiraNota.value);

  const soma = primeira + segunda + terceira;

  resultadoSoma.innerHTML = `<span style="padding: 0;">A soma das notas é: ${soma.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}</span>`
};

function media() {
  if (!validarCampos()) return;

  const primeira = parseFloat(primeiraNota.value);
  const segunda = parseFloat(segundaNota.value);
  const terceira = parseFloat(terceiraNota.value);

  const media = (primeira + segunda + terceira) / 3;

  let resultado = '';
  let corTexto = '';

  if (media < 70) {
    resultado = `<span style="color: red;"><strong>Reprovado :(</strong></span>`;
    corTexto = 'red';
  } else {
    resultado = `<span style="color: green;"><strong>Aprovado :D</strong></span>`;
    corTexto = 'green';
  }

  resultadoMedia.innerHTML = `A média das notas é: ${media.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}`;
  resultadoDiv.innerHTML = `Média: ${media.toLocaleString('pt-BR', { maximumFractionDigits: 2 })} - ${resultado}`;
  resultadoDiv.style.color = corTexto; 

  resultadoDiv.style.display = 'block';

}

somaButton.addEventListener('click', soma);
mediaButton.addEventListener('click', media);

document.getElementById('limpar').addEventListener('click', function() {
  document.getElementById('nome').value = '';
  document.getElementById('primeira').value = '';
  document.getElementById('segunda').value = '';
  document.getElementById('terceira').value = '';
  document.getElementById('soma').innerHTML = '';
  document.getElementById('media').innerHTML = '';
  resultadoDiv.style.display = 'none';
});
