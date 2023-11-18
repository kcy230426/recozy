const { kakao } = window;

export default function KakaoMapScript() {
    const container = document.getElementById('map');
    const options = {
        center: new kakao.maps.LatLng(37.384027, 127.122385),
        level: -1
    };
    const map = new kakao.maps.Map(container, options);

    var markerPosition  = new kakao.maps.LatLng(37.384027, 127.122385); 
    var marker = new kakao.maps.Marker({
      position: markerPosition
  });
  marker.setMap(map);

    
}
