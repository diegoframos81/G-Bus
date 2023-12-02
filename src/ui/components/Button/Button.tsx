import './Button.css'
import "inter";

export default function Buttons(props: any){

    return(
        <div>
        <button className={props.className}>{props.text}</button>
        </div>
    )
}