'use strict';

function Ship(name, model, sea) {
    let _isAnchorDroped = false;
    this.name = name;
    this.model = model;

    this.position = {
        x: 0,
        y: 0
    };
    this.speed = 0;
    this.distance = 0;
    if (sea.ships[name] )
                   throw new Error('Ship already exist');

    sea.ships[name] = this;

    this.moveTo = function (position) {
        if (_isAnchorDroped)
            throw new Error('You need to rise anchor');
        this.distance += Math.sqrt((position.x - this.position.x) ** 2 + (position.y - this.position.y) ** 2);
        this.position = {
            x: position.x,
            y: position.y,
        }
        return true;
    };

    this.move = function (direction) {
        let x = this.position.x;
        let y = this.position.y;
        // Вопрос в начале координат , предпологаем что нижниий левый угол , движение на Север - движение вверх , на восток сответсвено вправо
        //   Север (nord)
        //    ^
        //    |
        //    |
        //    |
        //    x
        //0,0 y------- > Восток (east)     
        switch (direction) {
            case 'n':
                x++;
                break;
            case 's':
                x--;
                break;
            case 'w':
                y--;
                break;
            case 'e':
                y++;
                break;
        }
        return this.moveTo({
            x,
            y
        });
    };

    this.isAnchorDroped = function () {
        console.log('isAnchorDroped', this);
        return _isAnchorDroped;
    };


    /**
     * @param {boolean} droped
     */
    this.dropAnchor = () => {
        if (this.speed !== 0)
            throw new Error('Speed must be 0');

        _isAnchorDroped = true;
    };
    this.upAnchor = () => {

        _isAnchorDroped = false;
    };  
}

