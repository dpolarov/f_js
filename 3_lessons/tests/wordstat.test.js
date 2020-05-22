
describe('wordStat', () => {
    it('Test 1 , Mama mia.', () => {
        const result = wordStat('Mama mia');
        assert.deepEqual(result, [{ word: 'Mama', sum: 380 },
            { word: 'mia', sum: 311 }
        ]);
    });
    it('Test 2 , один пробел', () => {
        const result = wordStat(' ');
        assert.deepEqual(result, [{ word: '', sum: 0 }
        ]);
    });

    it('Test 3 , много пробелов без слов', () => {
        const result = wordStat('     ');
        assert.deepEqual(result, [{ word: '', sum: 0 }
        ]);
    });
    it('Test 4 , пустая строка', () => {
        const result = wordStat('');
        assert.deepEqual(result, [{ word: '', sum: 0 }
        ]);
    });

    it('Test 5 , одно слово', () => {
        const result = wordStat('Mama');
        assert.deepEqual(result, [{ word: 'Mama', sum: 380 }
        ]);
     });
    
    it('Test 6 , Много пробелов и слова ', () => {
        const result = wordStat('    Mama    mia    ');
        assert.deepEqual(result, [{ word: 'Mama', sum: 380 },
            { word: 'mia', sum: 311 }
        ]);
     });
      
});

describe('strCharSum', () => {

    it('Test 1 , Mama', () => {
        const result = strCharSum('Mama');
        assert.deepEqual(result, 380 );
    });

    it('Test 2 , пробел', () => {
        const result = strCharSum(' ');
        assert.deepEqual(result, 32 );
    });
    it('Test 3 , пустая строка', () => {
        const result = strCharSum('');
        assert.deepEqual(result, 0 );
    });

});
