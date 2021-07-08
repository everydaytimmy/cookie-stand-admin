import Form from "./form"


export default function Main(props) {

 
    return (
      <main className="mx-auto h-96">
        <div className="mx-auto h-88">
          <Form onStandCreate={props.onStandCreate}/>
        </div>
      </main>
    )
  }