export default async function Service(url){
    try{
const res= await fetch(url);
const ans=await res.json();
return ans;
    }
    catch(error){
return 'Content Not Found';
    }
}