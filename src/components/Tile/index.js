import Container from '@material-ui/core/Container';
import './style.scss'

export default function Tile({item, handleDoubleClick}) {

  let scaleIt = `scaleX(${item.mirrored})`;
  if(item.orientation == 90 || item.orientation == -90 || item.orientation == 270 || item.orientation == -270) {
    scaleIt = `scaleY(${item.mirrored})`;
  }

  let tileStyles = {
    width: 100,
    height: 100,
    background: item.bg.substring(0,1) === "#" ? item.bg : `url(${item.bg})`,
    transform: `rotate(${item.orientation}deg) ${scaleIt}`
  }

  return (
    <Container className={item.displayControlWidget ? "tile activeTile" : "tile"} style={tileStyles} onDoubleClick={(e) => handleDoubleClick(e)}></Container>
  );
}
