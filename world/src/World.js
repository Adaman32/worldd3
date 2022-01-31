import { geoPath, geoGraticule} from 'd3';
import { geoNaturalEarth1 } from 'd3-geo';

const width = window.innerWidth;
const height = window.innerHeight;
const getCircleR = () => {
    if(width>1000) return width/1000;
    else return 1;
};
const circleR = getCircleR();

console.log(circleR);

const projection = geoNaturalEarth1()
    .translate([width/2, height/2])
    .scale(width*0.16);
const path = geoPath(projection);
const graticule = geoGraticule();

export const World = ({worldAtlas: {countries, interiors, id}, aurora }) => (
    <g key={id} className='map'>
        <path className='sphere' d={path({type: 'Sphere'})} />
                
        <path className='graticules' d={path(graticule())} />
        <g className='land'>
        {
            countries.features.map(feature => (
                <path 
                    // className='land'
                    d={path(feature)}
                />
            ))
        }
        </g>
        <path 
            className='interiors'
            d={path(interiors)}
        />

        {
            aurora.map(d => {
                const [x,y] = projection([d[0], d[1]]);
                if( 10 > d[2] && d[2] > 5){
                    return <circle className="kp1" cx={x} cy={y} r={circleR}/> 
                }
                if( 20 > d[2] && d[2] >= 10){
                    return <circle className="kp2" cx={x} cy={y} r={circleR}/> 
                }
                if( 30 > d[2] && d[2] >= 20){
                    return <circle className="kp4" cx={x} cy={y} r={circleR}/> 
                }
                if( 50 > d[2] && d[2] >= 30){
                    return <circle className="kp6" cx={x} cy={y} r={circleR}/> 
                }
                if( d[2] >= 50){
                    return <circle className="kp8" cx={x} cy={y} r={circleR}/> 
                }

            })
        }
    </g>
);