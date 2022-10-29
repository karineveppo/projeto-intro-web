let listaDeAnimes = []
   anime1 = {
      anime : "Bleach".toUpperCase(),
      anoDeLancamento : Number(2004),
      autor : "Tite Kubo.",
      genero : ["Shonen","Ação", "Aventura", "Fantasia"],
      lancandoNovasTemporadas : true,
      paisDeOrigem : "Japão",
      sinopse : "Kurosaki Ichigo é um garoto de 15 anos que pode ver e falar com espíritos de pessoas mortas.Até que um dia ele encontra Kuchiki Rukia, uma Shinigami (deus da morte), e descobre posteriormente que também é um Shinigami. Agora, com seus poderes, ele terá que proteger sua cidade das forças do mal, enfrentando o maior de todos os vilões Eyezen...",
      temporadas : 16,
      imagem :"imagens/bleach-650.jpg",
      link :"https://ptanime.com/analise-anime-bleach/",
   },
   anime2 = {
      anime : "Demom Slayer".toUpperCase(),
      anoDeLancamento : Number(2019),
      autor : "Koyoharu Gotōge.",
      genero : ["Shonen", "Ação", "Aventura", "Fantasia"],
      lancandoNovasTemporadas : true,
      paisDeOrigem : "Japão",
      sinopse : "Após um ataque de demônios na vila, o jovem Tanjiro Kamado perdeu praticamente toda sua família. Apenas sua irmã mais nova, Nezuko, sobreviveu, mas foi transformada em um demônio. Para vingar sua família e recuperar a irmã, Tanjiro se torna um caçador de demônios e parte em busca de justiça.",
      temporadas : 2,
      imagem :"imagens/demon-slayer-650.jpg",
      link :"https://www.legiaodosherois.com.br/t/demon-slayer-kimetsu-no-yaiba",
    },
    anime3 = {
        anime : "Jujutsu Kaisen".toUpperCase(),
        anoDeLancamento : Number(2020),
        autor : "Gege Akutami.",
        genero : ["Shonen", "Ação", "Aventura", "Fantasia", "Demônios", "Sobrenatural"],
        lancandoNovasTemporadas : true,
        paisDeOrigem : "Japão",
        sinopse : "Itadori é um estudante comum e normal do ensino médio. Apesar do seu talento nos esportes, ele decide participar do Clube de Ocultismo, onde pode relaxar, sair com seus amigos e visitar seu avô no hospital. Certo dia, os membros do clube encontram um objeto amaldiçoado na escola e retiram o selo de proteção, atraindo criaturas chamadas de \"maldições\". Para salvar os amigos que estavam sendo atacados, Itadori engole o objeto, absorvendo a maldição. Desse momento em diante, o garoto e a maldição compartilham o mesmo corpo, e a vida de Itadori muda completamente.",
        temporadas : 1,
        imagem :"imagens/jujutsu-kaisen-650.jpg",
        link :"https://www.legiaodosherois.com.br/t/jujutsu-kaisen",
    },
    anime4 = {
        anime : "Tate no Yūsha no Nariagari".toUpperCase(),
        anoDeLancamento : Number(2020),
        autor : "Aneko Yusagi.",
        genero : ["Ação", "Aventura", "Fantasia", "Comédia"],
        lancandoNovasTemporadas : true,
        paisDeOrigem : "Japão",
        sinopse : "Tate no Yusha no Nariagari se passa em uma realidade bem diferente da nossa. Existe uma lenda em que 4 heróis irão salvar a todos usando suas poderosas armas, a lança, a espada, o arco e o escudo. Para isso, os 4 heróis devem ser invocados e eles, junto com suas equipes, irão enfrentar as hordas de monstros que ameaçam a paz.Com um protagonista serio e não tão nobre quanto os dos animes de heróis que estamos acostumados, podemos ver o modo como as injustiças afetam uma pessoa.",
        temporadas : 2,
        imagem :"imagens/heroi-de-escudo650.jpg",
        link :"https://anime21.blog.br/2019/07/04/tate-no-yuusha-no-nariagari-a-historia-do-heroi-do-escudo-e-suas-polemicas/#.Yz68mnbMIdU"
    },
    anime5 = {
        anime : "Naruto".toUpperCase(),
        anoDeLancamento : Number(2002),
        autor : "Masashi Kishimoto.",
        genero : ["Ação", "Aventura", "Fantasia", "Comédia", "Drama"],
        lancandoNovasTemporadas : true,
        paisDeOrigem : "Japão",
        sinopse : "Naruto é uma criança que vive em Konoha, a vila ninja do País do Fogo. Quando ainda bebê, Naruto teve um youkai, que na crença japonesa representa um monstro, aprisionado em seu corpo, o Bijuu chamado Kyuubi, pelo Yondaime Hokage, para salvar a Aldeia da folha. Desde então, Naruto é visto por muitas pessoas como um monstro, não só pelos familiares das pessoas mortas pela Kyuubi, mas também por pessoas que sofrem com as besteiras feitas por ele, que é extremamente arteiro. Incompreendido, Naruto sonha em se tornar um ninja poderoso, e ser nomeado Hokage, para assim poder ser reconhecido por todos.",
        temporadas : 29,
        imagem :"imagens/naruto-650.jpg",
        link :"imagens/naruto-650.jpg",
    };
   
    let animes = []
    animes.push(anime1, anime2, anime3, anime4, anime5)
    console.log(animes)
   
   const mediaDeTemporadas =(( anime1.temporadas + anime2.temporadas + anime3.temporadas + anime4.temporadas + anime5.temporadas)/5)
   console.log("Média de temporadas dos Animes:" , mediaDeTemporadas)

const verficarNovasTemporadas = (anime1.lancandoNovasTemporadas && anime2.lancandoNovasTemporadas && anime3.lancandoNovasTemporadas && anime4.lancandoNovasTemporadas && anime5.lancandoNovasTemporadas)
   console.log(verficarNovasTemporadas)




//DOM
function meusAnimes() {
        let input = document.getElementById("input").value
        input = input.toLowerCase();
        let x = document.getElementsByClassName("todosAnimes");
    
        for (i = 0; i < x.length; i++) {
            if (!x[i].innerHTML.toLowerCase().includes(input)) {
                x[i].style.display = "none";
            }
            else {
                
    
                x[i].style.display = "block";
                
    
    
            } 
    
    
        }
    
        if(input === "") {
             alert("Campo vazio😴 ")
    
        
        
        }else if(input !==x){
            alert("Anime encontrado!")
        }
    }
