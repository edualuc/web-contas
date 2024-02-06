const FormLabel = (props: any) => {
    const {label, ...rest} = props
    return <div className="w-full flex">
        <label className="min-w-20">{props.label}:</label>
        <input className="flex-auto" {...rest} type={props.type || "text"} onChange={(e) => rest?.onChange(e, rest.name)} />
    </div>
}

export default FormLabel