import Form from "./form"


export default function Main(props) {

 
    return (
      <main className="mx-auto">
        <div className="mx-auto">
          <Form onStandCreate={props.onStandCreate}/>
        </div>
      </main>
    )
  }