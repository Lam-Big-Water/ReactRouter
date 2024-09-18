import {useParams, useLoaderData, Form, useActionData} from 'react-router-dom';

const Profile = () => {
    const {id, post}: any = useLoaderData();
    const actionData: any = useActionData();
    console.log(actionData)
    // console.log(id);
    
    // const params = useParams<{profileId: string}>();
    // console.log(params)
  return (
    <div>
        <h1>Profile title: {post.title}</h1>
        <p>{post.body}</p>
        <hr />

        <h2>Comments</h2>
        {actionData && <span>{actionData.body}</span>}

        <Form method='post' action={`/profiles/${id}`}>
            <textarea
            name='comment'
            placeholder='Write a comment...'
            />
            
            <button type='submit'>
                Submit
            </button>
        </Form>
    </div>
  )
}

export default Profile