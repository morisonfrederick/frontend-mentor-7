import Card from "./Components/Card";
import { useEffect, useState } from "react";
import userData from "./data/card-data";
import type { userDataType } from "./types/userTypes";

function App() {
  return (
    <div
      className="p-5 pt-10  font-barlow flex flex-col gap-5 bg-Light-grayish-blue gap-5md:max-h-full md:p-20 md:max-h-full md:grid md:gap-5 md:grid-cols-4 md:[&>:nth-child(1)]:col-span-2
    md:[&>:nth-child(5)]:col-start-4 md:[&>:nth-child(5)]:row-start-1 md:[&>:nth-child(5)]:row-span-2 md:[&>:nth-child(3)]:col-start-1 md:[&>:nth-child(3)]:col-span-1
    md:[&>:nth-child(4)]:col-span-2
    "
    >
      {userData.map((user) => (
        <Card key={user.id} {...user} />
      ))}
    </div>
  );
}

export default App;
