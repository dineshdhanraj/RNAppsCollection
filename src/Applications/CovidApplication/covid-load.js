import Service from "./covid-service";


export default async function Load(url){
const result = await Service(url);
if(result.country){
  const Holder={
recovered: result.recovered,
      recovered: result.todayRecovered,
      tests: result.tests,
      flag: result.countryInfo.flag,
      todayCases: result.todayCases,
      cases: result.cases
  };
  return Holder;
}
else
{

  const Holder={
    cases:'Not Available',
    recovered: 'Not Available',
    tests: 'Not Available',
    flag: 'Not Available',
    todayCases: 'Not Available',
  };
  return Holder;
}

}