import { Data } from "../../../compontents/attributes/Attributes";
import './Card.css'

interface Props {
    data: Data;
    valueName: Function;
}

class Person implements Props{
    name: string;
    front_default: string;
    type: string;

    constructor(_name: string, _front_default: string, _type: string) {
        this.name = _name
        this.front_default = _front_default
        this.type = _type
    }
    valueName!: Function;
    data!: Data;
}

export const Card: React.FC<Props> = ({ data, valueName }) => {
    const value = new Person(data.name , data.sprites.front_default, data.types[0].type.name)

    const handleTeste = () => {
        const array: [string, string] = [value.type, value.name]
        valueName(array)
    }

    return(
        <div className={`w-[300px] md:w-[320px] xl:w-[400px] card ${value.type} py-3 px-2 mb-2 border border-gray-600 rounded-xl dex-shadow font-poppins`} onClick={handleTeste}>
            <h3 className="text-white text-2xl">{value.name[0].toLocaleUpperCase() + value.name.substring(1)}</h3>
            <div className="w-full flex justify-end">
                <img className="w-[110px]" src={value.front_default} alt='sprite'/>
            </div>
            <span className="text-white rounded-xl py-1 px-2 border border-white text-sm">{value.type}</span>
        </div>
    )
}