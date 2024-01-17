


type InputType = 
| "button"
| "checkbox"
| "color"
| "date"
| "datetime-local"
| "email"
| "file"
| "hidden"
| "image"
| "month"
| "number"
| "password"
| "radio"
| "range"
| "reset"
| "search"
| "submit"
| "tel"
| "text"
| "time"
| "url"
| "week"
| "select"
| "textarea"

type Option = {
    name:string
    value:string
}

type FormInputType = {
    name:string
    width?:1|2
    label?:string
    placeholder?:string
    type?:InputType
    required?:boolean
    maxlength?:string
    minLength?:string
    pattern?:RegExp
    autocomplete?:boolean
    min?:number
    max?:number
    step?:number
    multiple?:boolean
    accept?:string[]
    autofocus?:boolean
    className?:string
    options?:Option[]
}

export default FormInputType