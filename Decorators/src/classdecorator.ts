function Component(constructor : Function){
    console.log('Component decorator called.');
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertDom = () => {
        console.log('Inserting he component Dom');
    }
    

}

@Component
class ProfileComponent{

}