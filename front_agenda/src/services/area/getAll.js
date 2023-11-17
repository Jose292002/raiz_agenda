import API_URL from './../../constants/api'

export default function getAllAreas(){
    return fetch(API_URL.AREAS_GET).then((response)=> response.json())
}