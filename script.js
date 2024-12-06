document
  .getElementById("send-button")
  .addEventListener("click", function (event) {
    const nome = document.getElementById("Nome");
    const telefone = document.getElementById("Telefone");
    const email = document.getElementById("Email");
    const address = document.getElementById("address");
    const mensagem = document.getElementById("msg");
    const condominio = document.querySelector('input[name="type"]:checked');

    let isValid = true;

    // Verificar campo Nome
    if (!nome.checkValidity()) {
      alert("Por favor, preencha o nome corretamente.");
      nome.focus();
      isValid = false;
    }

    // Verificar campo Telefone
    if (isValid && !telefone.checkValidity()) {
      alert("Por favor, insira um telefone válido no formato (xx) xxxxx-xxxx.");
      telefone.focus();
      isValid = false;
    }

    // Verificar campo Email
    if (isValid && !email.checkValidity()) {
      alert("Por favor, insira um e-mail válido.");
      email.focus();
      isValid = false;
    }

    // Verificar campo Address
    if (isValid && !address.checkValidity()) {
      alert("Por favor, insira seu endereço.");
      address.focus();
      isValid = false;
    }

    // Verificar campo Condominio
    if (isValid && !condominio) {
      alert("Por favor, selecione se mora em condomínio.");
      isValid = false;
    }

    // Se todos os campos estiverem válidos, compõe o e-mail
    if (isValid) {
      const emailBody = `Olá, me chamo ${
        nome.value
      } e vi que vocês fazem uma consultoria sobre isenção/redução de IPTU. Gostaria de saber mais sobre isso.
Moro no ${
        address.value
      } e gostaria de verificar a possibilidade de abaixar ou isentar meu IPTU. 
Meu número de contato é ${telefone.value} e meu email é ${email.value}.
                        
Condomínio: ${condominio.value}

Mensagem adicional: ${mensagem.value || "Sem mensagem adicional"}`;

      const mailtoLink = `mailto:contato@tasse.com.br?subject=Isenção / Redução de IPTU&body=${encodeURIComponent(
        emailBody
      )}`;

      window.location.href = mailtoLink;
    }
  });
