"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"

const Currency = () => {
  const [currency, setCurrency] = useState({
    from: "",
    to: ""
  })
  return (
    <Tabs defaultValue="converter" className="max-w-2xl h-[500px] w-full dark:bg-slate-900 bg-slate-100 rounded-md">
      <TabsList className="w-full grid grid-cols-2">
        <TabsTrigger value="converter">Converter</TabsTrigger>
        <TabsTrigger value="currencies">Currencies</TabsTrigger>
      </TabsList>
      <div className="p-2 h-[92]">
        <TabsContent value="converter">Make changes to your account here.</TabsContent>
        <TabsContent value="currencies">Change your password here.</TabsContent>     
      </div>
   </Tabs>
  )
}

export default Currency