import { Attributtes } from "../compontents/Attributtes/Attributes";

interface Props {
    person: Attributtes;
}

class Person implements Props{
    name: string;
    back_default: string;
    data?: any;

    constructor(_name: string, _back_default: string, _data: string) {
        this.name = _name
        this.back_default = _back_default
        this.data = _data
    }
    
    person!: Attributtes;
}

export const Card: React.FC<Props> = ({ person }) => {
    const value = new Person(person.data.name , person.data.sprites.back_default, person.data)

    return(
        <div>
            {value.name}
        </div>
    )
}