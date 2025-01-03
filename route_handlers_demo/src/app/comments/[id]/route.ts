import { redirect } from "next/navigation";
import { comments } from "../data";

// get comment by id
export async function GET(
  request: Request,
  {
    params,
  }: {
    params: {
      id: string;
    };
  }
) {
  const comment = comments.find(
    (comment) => comment.id === parseInt(params.id)
  );
  if(!comment){
    redirect("/comments")
  }
  return Response.json(comment);
}

// update comment by id
export async function PATCH(request:Request,{params}:{params:{id:string}}){
    const body=await request.json()
    const {text}=body
    const index=comments.findIndex(comment=>comment.id === parseInt(params.id))
    comments[index].text=text;
    return Response.json(comments[index])
}

// delete comment by id

export const DELETE=async(request:Request,{params}:{params:{id:string}})=>{
    const index=comments.findIndex(comment=>comment.id === parseInt(params.id))
    const deletedComment=comments[index]
    comments.splice(index,1)

    return Response.json(deletedComment)
}