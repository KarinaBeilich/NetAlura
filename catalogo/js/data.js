// Este arquivo é como uma caixa de brinquedos onde guardamos informações sobre os filmes e séries.
// Aqui temos uma lista de categorias, como pastas organizadas com cartões dentro.

// Esta é a lista principal de categorias de filmes e séries.
// É como uma estante com prateleiras, cada uma com um nome.
export const categories = [
    // Primeira prateleira: "Series populares"
    // Aqui colocamos séries que todo mundo gosta!
    {
        title: "Series populares",
        items: [
            // Primeiro cartão: Friends, com uma imagem, é top 10, tem um selo vermelho "Clássico", já viu metade, e um link para o vídeo.
            // É como um cartão de Pokémon com foto, raros e especiais.
            {
                img: "https://tpmblog.com.br/wp-content/uploads/2019/10/friends-capa.png", top10: true, badge: "Clássico", badgeColor: "red", progress: 50,
                youtube: "https://www.youtube.com/watch?v=p2C6rAno59I"
            },
            // Segundo cartão: Brooklyn Nine-Nine, sem progresso ainda.
            {
                img: "https://jpimg.com.br/uploads/2020/01/brooklyn_nine_nine_setima_temporada_cartaz-1.png", progress: 12,
                youtube: "https://www.youtube.com/watch?v=Tx4Jbtp2eZE"
            },
            // Terceiro: Stranger Things, novo.
            {
                img: "https://flowgames.gg/wp-content/uploads/2025/11/stranger-things-season-5.jpg", progress: 7,
                youtube: "https://www.youtube.com/watch?v=U4sndXXtrtE"
            },
            // Quarto: Lupin, novo.
            {
                img: "https://revistaanamaria.com.br/wp-content/uploads/2025/12/lupin-750x375.png", progress: 0,
                youtube: "https://www.youtube.com/watch?v=FoiQ-Xr8NDI"
            },
            // Quinto: The Good Doctor
            {
                img: "https://rollingstone.com.br/wp-content/uploads/2026/03/Segunda-temporada-de-ONE-PIECE-A-Serie-estreia-na-Netflix-1536x864.jpg", progress: 0,
                youtube: "https://www.youtube.com/watch?v=KLtSxOirH4g"
            },
        ]
    },
    // Segunda prateleira: "Séries"
    // Mais séries legais aqui!
    {
        title: "Séries",
        items: [
            // The Boys, top 10, nova temporada.
            { img: "https://e01-elmundo.uecdn.es/assets/multimedia/imagenes/2022/05/26/16535747598875.jpg", top10: true, badge: "Nova temporada", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=Rid9NsZsQbE&t=3s" },
            // XO, Kitty, top 10.
            { img: "https://nodetalhe.com/wp-content/uploads/2025/02/Xo-kitty-4-scaled-1536x864.jpg", top10: true, youtube: "https://www.youtube.com/watch?v=l7i3ymgVf20" },
            // Outra série com novo episódio.
            { img: "https://portalleodias.com/diversos/wp-content/uploads/2025/07/p18974714_b_h10_ao-750x375.jpg", badge: "Novo episódio", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=sA6xIbcaZsw" },
            // Mais uma novidade.
            { img: "https://educadora909.com.br/wp-content/uploads/Foto-site-educadora-17-2.png", badge: "Novidade", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=mn0QvmEicIY" },
            { img: "https://cdn.awsli.com.br/600x450/769/769081/produto/33881548/baba0292ed.jpg", badge: "Novidade", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=1_Y9QKNqdUE" },
        ]
    },
    // Terceira prateleira: "Para maratonar"
    // Filmes e séries perfeitos para assistir um atrás do outro!
    {
        title: "Para maratonar",
        items: [
            // O Agente Secreto, top 10.
            { img: "https://universoreverso.com.br/wp-content/uploads/2025/10/o-agente-secreto-wagner-moura.jpg", top10: true, youtube: "https://www.youtube.com/watch?v=AOBPXs_euPA" },
            // Peaky Blinders, top 10, novidade.
            { img: "https://portalmakingof.com.br/wp-content/uploads/2026/03/CAPA-PEAKY-e1773979588239.png", top10: true, badge: "Novidade", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=P_-r11fcDTc&t=3s" },
            // O Diabo Veste Prada, top 10, novo episódio.
            { img: "https://www.bnewssaopaulo.com.br/media/uploads/2025/11/1-o-diabo-veste-prada-2.jpg", top10: true, badge: "Novo episódio", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=CeIu3WYoJyo" },
            // Scary Movie, top 10, novo episódio.
            { img: "https://culturar.blog/wp-content/uploads/2023/07/scary-4.jpg", top10: true, badge: "Novo episódio", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=GxOoTFm0IFg" },
            { img: "https://loggado.com/wp-content/uploads/2017/09/good-doctor-800x445.jpg", top10: true, badge: "Novo episódio", badgeColor: "red", youtube: "https://www.youtube.com/watch?v=lnY9FWUTY84" },
        ]
    }
];