'use strict';
/**
 * @param {x,y} position
 * @param {count} ������������ ��������� ����� � ���� (�����������)
 * @param {sea} sea

 */
function Dock(x,y, count , sea) {
    this.name = 'Position' + x + y;
    this.shipInDock =[];
    this.volume = count;

    this.position = {
        x: x,
        y: x
    };

//    this.position.y = y
    
  if  (sea.docs[this.name]) 
                   throw new Error('Docs already exist');
  sea.docs[this.name]=this; 
  
  this.moor = function(ship) {
    if (this.shipInDock.length >= this.volume )
           throw new Error('Dock crowded');
 
    if (this.shipInDock[ship.name])
           throw new Error('Ship already in dock');
    console.log(this.position.x, ship.position.x);
    if ( !(this.position.x === ship.position.x  || this.position.y === ship.position.y))
         throw new Error('Ship not in near dock');

    if (!ship.isAnchorDroped )
         throw new Error('is Anchor drop');

    // ����� ������� ������� ������ , ������� �������� ������� � ���� . �� � ������ �������,��� ��������� ,�������� 
    //������� , �������������  � ��� ��� ;)

    // if  !ship.isAnchorDroped .... 
    // ship.moveTo({x: this.position.x , y:this.position.y});
    // ship.dropAnchor
    ship.dropAnchor;
    this.volume++;
    this.shipInDock[ship.name]=ship;

  }
  this.unmoor = function(ship) {
 
    if (!this.shipInDock[ship.name])
           throw new Error('Ship not in dock');

    if (!ship.isAnchorDroped )
         throw new Error('is Anchor down');

    // ��� ���� ����� ������� ������ ������� �������� ����� � ������� ��� �� ���� 

    ship.upAnchor;
    this.volume--;
    delete this.shipInDock[ship.name];

  }
 
};

