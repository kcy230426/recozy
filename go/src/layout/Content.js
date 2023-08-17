import Banner from './../component/Banner'
import Event from './../component/Event'
import Form from './../component/Form'
import Way from './../component/Way'

const Content = (props) => {
return(
    <>
    <Banner/>
    <Event dbpath={props.dbpath} />
    <Form/>
    <Way dbpath={props.dbpath}/>
    </>
)
}

export default Content
