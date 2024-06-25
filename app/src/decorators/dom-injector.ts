export function domInjector(seletor: string) {
    let elemento: HTMLElement;
    return function(target: any, propertyKey: string) {
        const getter = function() {
            if(!elemento) {
                elemento = <HTMLElement>document.querySelector(seletor);
                console.log(`buscando elemento do dom com o seletor ${seletor} encontrado em ${propertyKey}`)
            }

            return elemento;
        }
        Object.defineProperty(
            target, 
            propertyKey, 
            {get: getter}
        ); 
    }
}