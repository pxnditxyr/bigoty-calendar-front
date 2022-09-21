export const getLocalDatetime = ( aditionalHours : number = 0 ) : string => {
  const timeZoneOffset = ( new Date() ).getTimezoneOffset() * 60000;
  const nowDate = Date.now() - timeZoneOffset;
  const addedNowDate = nowDate + ( aditionalHours * 3600000 );
  const localTime = ( new Date( addedNowDate ) ).toISOString();
  return localTime.split( '.' )[ 0 ];
};
