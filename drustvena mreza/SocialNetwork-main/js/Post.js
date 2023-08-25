

class Post{
    post_id='';
    post_content="";
    user_id="";
    likes="";
    api_url="https://64dfa95d71c3335b2582f019.mockapi.io"


    async create(){
        let session=new Session();
        session_id=session.getSession();

        let data={
            user_id:session_id,
            content:this.post_content,
            likes:0
        }
        data=JSON.stringify(data);
        let response=await fetch(this.api_url+"/posts",{
            method:"POST",
            headers:{
                "Content-Type":"aplication/json"
            },
            body:data

        });
        data=await response.json()

        return data;
    }

    async getAllPosts(){
        let response=await fetch(this.api_url+"/post");
        let data=await response.json();
        return data;
    }

    like(){
        fetch(this.api_url+"/posts/"+post_id,{
            method:"PUT",
            headers:{
                "Content-type":"application/json"
            },
            body:data
        })
        .then(response=>response.json())
        .then(data=>{})
    }

    delete(post_id){
        fetch(this.api_url+"/posts/"+post_id,{
            method:"DELETE"
        })
        .then(response=>response.json())
        .then(data=>{})
    }
};

