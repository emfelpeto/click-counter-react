import Select from 'react-select';
  
export function Selector({textLabel, options}) {
    {console.log(options)}
    return(
        <Select 
            
            options={options} 
            defaultValue={textLabel}
            />
    )
}