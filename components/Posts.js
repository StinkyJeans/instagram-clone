import React from 'react'
import Post from './Post'

export default function Posts() {
    const posts = [
        {
            id: '1',
            username: "stinkyJeans",
            userImg: "https://scontent.fdvo1-1.fna.fbcdn.net/v/t39.30808-6/335144975_519088560298176_6784039890760073985_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEZrrlFHKxw958pNVfGk6T9G60DywaXw6wbrQPLBpfDrIJoBwMgpM8G_GZnRzZzTnb2ilGV_H4h32rdWfLdYQih&_nc_ohc=QgMF_Lj0Ex8AX88nuyw&_nc_oc=AQm58tnSJwmSmxIdGrRhrG0dmMfvy7XEsAip7K4Gi6lJ3yePocDx8RE_1BM8Og439T4&_nc_ht=scontent.fdvo1-1.fna&oh=00_AfCmT6fBNtfVTq8L6Tf2v_jRWes7zl62m6IRdN8Xqj8kBw&oe=6540E481",
            img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Flofi-landing.nyc3.cdn.digitaloceanspaces.com%2Fcraft-your-productive-environment%2Fslideshow%2Fbedroom-view%2Fnight.jpg&tbnid=S2Wz9owXacEcRM&vet=12ahUKEwj53729sZaCAxVLzaACHRGxD4YQMygIegQIARBc..i&imgrefurl=https%3A%2F%2Flofi.co%2F&docid=pEZeyXCaZGXvcM&w=1920&h=1080&itg=1&q=lofi&ved=2ahUKEwj53729sZaCAxVLzaACHRGxD4YQMygIegQIARBc",
            caption: "Chill1"
        },
        {
            id: '1',
            username: "stinkyPoo",
            userImg: "https://scontent.fdvo1-1.fna.fbcdn.net/v/t39.30808-6/335144975_519088560298176_6784039890760073985_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEZrrlFHKxw958pNVfGk6T9G60DywaXw6wbrQPLBpfDrIJoBwMgpM8G_GZnRzZzTnb2ilGV_H4h32rdWfLdYQih&_nc_ohc=QgMF_Lj0Ex8AX88nuyw&_nc_oc=AQm58tnSJwmSmxIdGrRhrG0dmMfvy7XEsAip7K4Gi6lJ3yePocDx8RE_1BM8Og439T4&_nc_ht=scontent.fdvo1-1.fna&oh=00_AfCmT6fBNtfVTq8L6Tf2v_jRWes7zl62m6IRdN8Xqj8kBw&oe=6540E481",
            img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fas1.ftcdn.net%2Fv2%2Fjpg%2F05%2F78%2F49%2F88%2F1000_F_578498891_sxM567ugz3KOwGP4VnOGmNczb88SA4em.jpg&tbnid=tAaGnbcVGUadyM&vet=12ahUKEwj53729sZaCAxVLzaACHRGxD4YQMygNegQIARBm..i&imgrefurl=https%3A%2F%2Fstock.adobe.com%2Fimages%2Fsummer-lofi-wallpaper-lofi-backgrounds-series-summer-lofi-backdrop-texture-created-with-generative-ai-technology%2F578498891&docid=wi-huDQ7Wm0MwM&w=1000&h=667&q=lofi&ved=2ahUKEwj53729sZaCAxVLzaACHRGxD4YQMygNegQIARBm",
            caption: "Chill2"
        }
    ]
  return (
    <div>
        {posts.map(post =>(
            <Post
                key={post.id}
                id={post.id}
                username={post.username}
                userImg={post.userImg}
                img={post.img}
                caption={post.caption}
            />
        ))}
      
    </div>
  )
}
