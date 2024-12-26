import { FileFormatOperation } from "@/BE-library/main";
import { useSession } from "@/providers/SessionProvider";
import { columns } from "./column";
import { DataTable } from "./datatable";
import { useState, useEffect } from "react";
// import { FindingStudentInfoByAdmin, StudentOperation, token } from "@/ambLib/amb";
// import { ProductOperation } from "@/do_an-library/main";
// const conditions: FindingStudentInfoByAdmin[] = [];
async function getData(): Promise<any> {
  // const {session, status} = useSession();
  const action = new FileFormatOperation();
  const cnpm_token = "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiQURNSU4iLCJ1c2VySWQiOjYsInN1YiI6InRhbnRhaUBleGFtcGxlLmNvbSIsImV4cCI6MTczNjQ4MTc5M30.Rl9U4wkyNbdb2DjdWNORY9liL07sXdmwvdqzOZZBF1c";
  const res = await action.searchAll(cnpm_token);
  // if (status == "authenticated")
  // const ProdAction = new ProductOperation()
  // if (criteria == "search")
  // {
  //   console.log(value)
  //   const res = await ProdAction.searchelt(value)
  //   console.log(res)
  //   return res.data;
  // }
  // const res = await ProdAction.search(criteria, value)
  // console.log(res)
  // const data = await res.json();
  return res?.data;
}
export default async function DemoPage(reloadData:any) {
  // const test = useContext(UserContext)
  const data = await getData();
  const columnsWdata = await columns(reloadData);
  if (data)
    return(
      <div>
        <DataTable columns={columnsWdata} data={data} reload={reloadData}/>
      </div>
    )
  else 
    return(
      <div className="text-xl flex items-center">
        Lỗi xảy ra vui lòng thử lại!
      </div>
  )
}