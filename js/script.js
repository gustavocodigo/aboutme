document.addEventListener("DOMContentLoaded", () => {
    const github_username = "gustavocodigo"

    document.getElementById("topavatar").src = "http://github.com/gustavocodigo.png"

    function updateInterceptors() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }

    

    document.addEventListener('scroll', function () {


        let scrollTop = document.documentElement.scrollTop

        if (scrollTop <= 80) {
            let arrow1 = document.getElementById("arrow1")
            arrow1.style.transform = "rotate(0deg)";
            arrow1.parentElement.href = "#stacks"

        }

        if (scrollTop >= window.innerHeight - 200) {
            let arrow1 = document.getElementById("arrow1")
            arrow1.style.transform = "rotate(180deg)";
            arrow1.parentElement.href = "#top";
        }




        function isScrollNoFinal() {
            const alturaJanela = window.innerHeight || document.documentElement.clientHeight;
            const alturaTotalPagina = document.documentElement.scrollHeight;
            const posicaoAtualScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

            const distanciaDoFinal = window.innerHeight * 0.2;

            return posicaoAtualScroll + alturaJanela >= alturaTotalPagina - distanciaDoFinal;
        }



        if (isScrollNoFinal()) {
            let arrow1 = document.getElementById("arrow2")
            arrow1.style.transform = "rotate(180deg)";
            arrow1.parentElement.href = "#stacks"
        } else {
            let arrow1 = document.getElementById("arrow2")
            arrow1.style.transform = "rotate(0deg)";
            arrow1.parentElement.href = "#contact"
        }


    });
    updateInterceptors()


    const stacks = [
        {
            "avatar": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
            "title": "CSS",
            "description": "Cascading Style Sheets (CSS) é uma linguagem de folha de estilos usada para descrever a apresentação de um documento escrito em HTML."
        },
        {
            "avatar": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
            "title": "HTML",
            "description": "Hypertext Markup Language (HTML) é a linguagem de marcação padrão para criar páginas da web e aplicações web."
        },
        {
            "avatar": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            "title": "JavaScript",
            "description": "JavaScript é uma linguagem de programação que permite páginas da web e aplicações web interativas."
        },
        {
            "avatar": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            "title": "React",
            "description": "React é uma biblioteca JavaScript para construção de interfaces de usuário, frequentemente usada para criar aplicações de página única."
        },
        {
            "avatar": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
            "title": "Tailwind CSS",
            "description": "Tailwind CSS é um framework CSS de utilitários que ajuda a criar designs personalizados e responsivos."
        },
        {
            "avatar": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
            "title": "Node.js",
            "description": "Node.js é um ambiente de tempo de execução que permite executar JavaScript no lado do servidor."
        },
        {
            "avatar": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
            "title": "Linux",
            "description": "Linux é um sistema operacional de código aberto usado por várias distribuições para criar sistemas operacionais completos."
        },
        {
            "avatar": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
            "title": "C++",
            "description": "C++ é uma linguagem de programação de propósito geral conhecida por sua eficiência e flexibilidade."
        }
    ]




    document.getElementById("stacklist").innerHTML = stacks.map((e) => 
    
    
    `
    
    
    <div class="rounded mt-4 w-full  hover:bg-[#FFFFFF19] ">

    <div class="bg-[#17202E] text-white px-4 py-2 rounded text-sm flex justify-between hover:scale-70">
    <div>
    ${e.title}
    </div>
    
    <div class="flex gap-2">
    <div id="red" class="hover:animate-ping animation-delay-1s">
    </div>
    <div id="yellow" class="hover:animate-ping animation-delay-2s">
    </div>
    <div id="green" class="hover:animate-ping  animation-delay-3s">
    </div>
    </div>
    
    </div>
    <p class="text-xs mt-4 px-2 ">
     ${e.description}
    </p>
   
    </div>`
    ).join("\n")



    const stacks2 = [
        `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" title="CSS" description="Cascading Style Sheets (CSS) é uma linguagem de folha de estilos usada para descrever a apresentação de um documento escrito em HTML."/>`,
        `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" title="HTML" description="Hypertext Markup Language (HTML) é a linguagem de marcação padrão para criar páginas da web e aplicações web."/>`,
        `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" title="JavaScript" description="JavaScript é uma linguagem de programação que permite páginas da web e aplicações web interativas."/>`,
        `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" title="React" description="React é uma biblioteca JavaScript para construção de interfaces de usuário, frequentemente usada para criar aplicações de página única."/>`,
        `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" title="Tailwind CSS" description="Tailwind CSS é um framework CSS de utilitários que ajuda a criar designs personalizados e responsivos."/>`,
        `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" title="Node.js" description="Node.js é um ambiente de tempo de execução que permite executar JavaScript no lado do servidor."/>`,
        `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" title="Linux" description="Linux é um sistema operacional de código aberto usado por várias distribuições para criar sistemas operacionais completos."/>`,

        `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" title="C++" description="C++ é uma linguagem de programação de propósito geral conhecida por sua eficiência e flexibilidade."/>`,
        `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" title="Figma" description="Figma é uma ferramenta de design baseada na web usada para criar interfaces de usuário, protótipos interativos e muito mais."/>`
    ];



    stacks2.forEach((e, i) => {
        const div = document.createElement("div");
        div.style.position = "absolute";
        div.style.transform = "translate(-50%, -50%)";

        const imgElement = document.createElement("img"); // Criar um elemento <img>
        imgElement.src = e.match(/src="([^"]+)"/)[1]; // Extrair o valor do atributo src
        imgElement.title = e.match(/title="([^"]+)"/)[1]; // Extrair o valor do atributo title
        imgElement.setAttribute("description", e.match(/description="([^"]+)"/)[1]); // Extrair o valor do atributo description

        const el = `
            <div class="bg-[#121212DD] rounded text-xs absolute w-12 h-12 p-2 rounded-full hover:scale-125 cursor-pointer">
                ${imgElement.outerHTML} <!-- Adicionar o elemento <img> -->
            </div>`;

        div.innerHTML = el;
        document.getElementById("avatarback").appendChild(div);

        const rad = (i / stacks2.length) * Math.PI * 2;
        const w = div.parentElement.clientWidth;
        const h = div.parentElement.clientHeight; // Corrigir aqui, alterar de clientWidth para clientHeight
        const x = Math.cos(rad) * w * 0.36;
        const y = Math.sin(rad) * h * 0.36;
        div.style.top = (h / 2 + y) - h * 0.055 + "px";
        div.style.left = (w / 2 + x) - w * 0.08 + "px";

        div.addEventListener("click", () => {
            const img = div.querySelector("img");
            document.getElementById("description-title").innerText = img.title;
         document.getElementById("description").innerText = img.getAttribute("description");
            document.getElementById("infor").classList.remove("hidden")


            gsap.from("#infor", {
                opacity: 0,
                delay: 0.1,
                duration: 0.8,
            });

        });
    });


    updateInterceptors();






    const projectsArray = [
        {
            link: "https://www.gptnerdes.com/",
            name: "GptNerdes - GPT chat para nerdes"
        },
        {
            link: "https://github.com/gustavocodigo/Youtube-downloader",
            name: "Youtube Video Downloader"
        },
        {
            link: "https://github.com/gustavocodigo/CodeLeap-test",
            name: "CodeLeap CRUD Challeng"
        },
        {
            link: "https://github.com/gustavocodigo/Academia-x1",
            name: "Front de academia"
        },
        {
            link: "https://github.com/gustavocodigo/NexusRP-reward1",
            name: "Front de Loja (para aplicação desktop)"
        },
        {
            link: "https://github.com/gustavocodigo/ForquilhaProgramador",
            name: "Front de website para negocios"
        },
        {
            link: "https://github.com/gustavocodigo/TicTacToeGame/",
            name: "TicTac Toe Game - Jogo da velha"
        },
        {
            link: "https://github.com/gustavocodigo/Pong-Game-ui-Canvas-Javascript/",
            name: "PongGame - Jogo"
        },
        {
            link: "https://github.com/gustavocodigo?tab=repositories",
            name: "Meus repositorios"
        }
    ];

    document.getElementById("projects").innerHTML = projectsArray.map((e) => `
      <a href="${e.link}" class="text-xs whitespace-normal max-w-full" target="__blank">
      <div class="mt-2 p-2 bg-[#17202E] w-full max-w-full text-white rounded flex items-center space-x-4 duration-700 hover:bg-[#32323298] flex gap-2">
      <img src="https://icons.iconarchive.com/icons/hopstarter/mac-folders-2/48/Folder-Mac-icon.png" width=28>
       ${e.name}
      </div>
      </a>
     
    `).join("");




    function enviarMensagemDiscord(webhookURL, contato, conteudo) {
        return fetch(webhookURL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            content: `**Contato**: ${contato}\n\n**Conteúdo: **${conteudo}`
          })
        })
        .then(response => {

          if (response.status !== 204) {
            throw new Error('Erro ao enviar mensagem para o Discord.');
          }
          return true
        });
      }


    let contact = ""
    let message = ""
    let send_in = document.getElementById("send-in")
    function update_send_button() {
        if ((contact == "") || (message == "")) {
            send_in.classList.add("bg-[#787878]")
            send_in.classList.add("pointer-events-none")
         

        } else {
            send_in.classList.remove("bg-[#787878]")
            send_in.classList.remove("pointer-events-none")
            send_in.classList.remove("bg-[#fc4830]")
            

        }
        send_in.innerText = "ENVIAR"

        send_in.classList.remove("bg-[#5eff71]")
    }

    document.getElementById("contact-in").addEventListener("keyup", function (ev) {
        contact = ev.target.value
        update_send_button()
    })
    document.getElementById("description-in").addEventListener("keyup", function (ev) {
        message = ev.target.value
        update_send_button()
    })
    update_send_button()


    send_in.addEventListener("click", async function() {
        document.getElementById("contact-in").disabled = true
        document.getElementById("description-in").disabled = true
        send_in.classList.add("bg-[#787878]")
        send_in.classList.add("pointer-events-none")
        send_in.innerText = "ENVIANDO..."


        setTimeout(  async function(){
            try {
                await enviarMensagemDiscord("https://discord.com/api/webhooks/1145212969639219260/GCzb65_7udDONlJxisGEst8bWUWGb4EKluh3WkG7scTe6EheX6itsIttIgBQm2dG-cn9", contact, message)
                send_in.classList.remove("bg-[#787878]")
                send_in.classList.add("bg-[#5eff71]")
                send_in.innerText = "ENVIADO COM SUCESSO !"
                document.getElementById("contact-in").disabled = false
                document.getElementById("description-in").disabled = false
                send_in.classList.remove("pointer-events-none")
                document.getElementById("description-in").value = ""
                document.getElementById("description-in").placeholder = message
                document.getElementById("contact-in").placeholder = contact
                document.getElementById("contact-in").value = ""
    
            }catch(e) {
                send_in.classList.remove("bg-[#787878]")
                send_in.classList.add("bg-[#fc4830]")
                send_in.innerText = "FALHA AO ENVIAR !"
                document.getElementById("contact-in").disabled = false
                document.getElementById("description-in").disabled = false
            }
        },2100)
       
    })

})