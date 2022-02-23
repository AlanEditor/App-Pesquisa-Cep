function getDadosEnderecoPorCEP(cep) //funçao que pega os dados pela API
{

    let url = 'https://viacep.com.br/ws/'+cep+'/json/unicode/'
    
    
    let xml = new XMLHttpRequest()

    xml.open('GET', url)

    xml.onreadystatechange = () => {

        if(xml.readyState == 4 && xml.status == 200) //Confere se o status é 4 e se o codigo HTTP é 200
        {
            let dadosJsonText = xml.responseText
            let dadosJsonObj = JSON.parse(dadosJsonText) //converte de texto para objeto

            document.getElementById('endereco').value = dadosJsonObj.logradouro
            document.getElementById('bairro').value = dadosJsonObj.bairro
            document.getElementById('cidade').value = dadosJsonObj.localidade
            document.getElementById('uf').value = dadosJsonObj.uf
            
        }
    }
    
    xml.send()
}