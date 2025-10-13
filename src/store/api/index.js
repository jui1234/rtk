import Chance from 'chance'

const chance =new Chance();

const fakeUsers = ()=>{
    return chance.name({ middle: true });
}

export default fakeUsers;