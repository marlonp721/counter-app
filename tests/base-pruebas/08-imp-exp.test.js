import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => { 
    
    test('getHeroeById debe de retornar un heroes por ID', () => { 
        
        const id = 1;
        const hero = getHeroeById( id );
        
        expect( hero ).toEqual({ id: 1, name: 'Batman', owner:'DC' })

     });

     test('getHeroeById debe de retornar undefined si no existe', () => { 
        
        const id = 100;
        const hero = getHeroeById( id );
        
        expect( hero ).toBeFalsy();
     });

     test('getHeroeByOwner debe de retornar un heroes por Owner', () => { 
        
        const owner = 'Marvel';
        const heroes = getHeroesByOwner( owner );

        expect( heroes.length).toBe( 2 ); 
        
        // expect( heroes ).toEqual([{
        //     id: 1,
        //     name: 'Batman',
        //     owner: 'DC'
        // },
        // {
        //     id: 3,
        //     name: 'Superman',
        //     owner: 'DC'
        // },
        // {
        //     id: 4,
        //     name: 'Flash',
        //     owner: 'DC'
        // }]);

        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ))

     });

 });