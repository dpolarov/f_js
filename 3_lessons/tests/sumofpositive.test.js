describe("sumOfPositive", function () {
     it("Test 1 , numbers", function () {
        assert.deepEqual(sumOfPositive([-100, -50, 60]), {count: 1, sum: 60 });
    });

    it('Test 2, number', () => {
        const result = sumOfPositive([91, 93]);
        assert.deepEqual(result, { count: 2, sum: 184 });
    });

    it('Test 3, приведение типов', () => {
        const result = sumOfPositive([-1, -2, 0, '3']);
        assert.deepEqual(result, { count: 1, sum: 3 });
    });
    it('Test 4, нулевые значения', () => {
        const result = sumOfPositive([-0, -0, 0, 3]);
        assert.deepEqual(result, { count: 1, sum: 3 });
    });
    it('Test 5, все значения отрицательные', () => {
        const result = sumOfPositive([-1, -1, -1, -3]);
        assert.deepEqual(result, { count: 0, sum: 0 });
    });

    it('Test 6, строки ,считаем только цифры', () => {
        const result = sumOfPositive(["/", -1, -1, -3]);
        assert.deepEqual(result, { count: 0, sum: 0 });
    });

});
