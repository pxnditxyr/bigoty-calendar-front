export const getFormattedTime = ( date : string ) => {
  const dateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2})?$/;
  if ( dateRegex.test( date ) )
    return date;
  const formattedDate : string = new Date( Date.parse( date ) ).toLocaleString()
  const [ datePart, timePart ] = formattedDate.split( ',' );
  const [ month, day, year ] = datePart.split( '/' );
  const [ hour, minute, second ] = timePart.split( ':' );
  const [ secondPart, ampm ] = second.split( ' ' );

  const hour24 : number = ( ampm === 'PM' ) ? parseInt( hour ) + 12 : parseInt( hour );
  const newHour : string = ( hour24 >= 24 ) ? ( hour24 - 12 ).toString().replace( / /g, '' ) : hour24.toString().replace( / /g, '' );
  const newDate = `${ ( year.length === 2 ? '20' : '' ) + year }-${ month.length === 1 ? '0' + month : month }-${ day.length === 1 ? '0' + day : day }T${ newHour.toString().length === 1 ? '0' + newHour.toString() : newHour.toString() }:${ minute.length === 1 ? '0' + minute : minute }:${ secondPart.length === 1 ? '0' + secondPart : secondPart }`;
  return newDate.replace( / /g, '' );
};
