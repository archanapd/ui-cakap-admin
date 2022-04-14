import { useState } from 'react'
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from '@mui/material/Checkbox';
import FormControl from "@mui/material/FormControl";
import "./CheckBoxGroup.css";

export default function CheckBoxGroup(props:any) {
    const [checked, setChecked] = useState<string[]>([]);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const indx = checked.indexOf(event.target.value);
        setChecked(checked.filter(check => check !== event.target.value));
        if(indx === -1) {
            setChecked([...checked, event.target.value]);
        } else {
            setChecked(checked.filter(check => check !== event.target.value));
        }
    };
  return (
    <FormControl>
        {props.options.map((item:any, indx:any) => {
            return <FormControlLabel label={item.value} value={item.value} control={<Checkbox onChange={handleChange} checked={checked.includes(item.value)} />} key={indx} />
        })}
    </FormControl>
  );
}
