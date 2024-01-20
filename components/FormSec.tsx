// "use client";

// import CardWrapper from "@/components/CardWrraper";
// import {
//   Form,
//   FormItem,
//   FormMessage,
//   FormControl,
//   FormField,
//   FormLabel,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

// import { scuritySchema } from "@/resolver";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import zod from "zod";
// import { useState } from "react";

// const CaesarCipher = (text: any, shift: any) => {
//   return text
//     .split("")
//     .map((char: any) => {
//       const code = char.charCodeAt(0);
//       if (char.match(/[a-z]/i)) {
//         const offset =
//           char === char.toLowerCase() ? "a".charCodeAt(0) : "A".charCodeAt(0);
//         return String.fromCharCode(((code - offset + shift) % 26) + offset);
//       }
//       return char;
//     })
//     .join("");
// };

// const FeistelCipher = (plaintext: any, key: any) => {
//   // Implement Feistel cipher encryption logic
//   const blockSize = Math.ceil(plaintext.length / 2);
//   let left = plaintext.substring(0, blockSize);
//   let right = plaintext.substring(blockSize);

//   for (let round = 0; round < 16; round++) {
//     const temp = right;
//     right = xor(left, feistelFunction(right, key));
//     left = temp;
//   }

//   return left + right;
// };

// const feistelFunction = (data: any, key: any) => {
//   // Example: Simple XOR-based feistel function
//   return xor(data, key);
// };

// const xor = (a: any, b: any) => {
//   let result = "";
//   for (let i = 0; i < a.length; i++) {
//     result += String.fromCharCode(a.charCodeAt(i) ^ b.charCodeAt(i % b.length));
//   }
//   return result;
// };

// function FormSecurity() {
//   const [plaintext, setPlaintext] = useState("");
//   const [shiftCaesar, setShiftCaesar] = useState("");
//   const [key, setKey] = useState("");
//   const [ciphertext, setCiphertext] = useState("");

//   const form = useForm<zod.infer<typeof scuritySchema>>({
//     resolver: zodResolver(scuritySchema),
//     defaultValues: {
//       plainText: "",
//     },
//   });

//   const handleEncrypt = () => {
//     const caesarShift = 3; // You can choose any shift value for Caesar cipher
//     const caesarEncrypted = CaesarCipher(plaintext, caesarShift);
//     const feistelEncrypted = FeistelCipher(caesarEncrypted, key);

//     setCiphertext(feistelEncrypted);
//   };

//   const handleDecrypt = () => {
//     // Decrypt in reverse order
//     const feistelDecrypted = FeistelCipher(ciphertext, key);
//     const caesarShift = 3; // You should use the same shift value as used during encryption
//     const caesarDecrypted = CaesarCipher(feistelDecrypted, -caesarShift);

//     setPlaintext(caesarDecrypted);
//   };

//   const onSubmit = (data: zod.infer<typeof scuritySchema>) => {
//     console.log(data);
//   };
//   return (
//     <CardWrapper
//       headerLabel="Generate Text"
//       backButtonHref="/auth/login"
//       backButtonLabel="Back to Login"
//     >
//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)}>
//           <div className="space-y-6">
//             <FormField
//               control={form.control}
//               name="plainText"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Plain Text</FormLabel>
//                   <FormControl>
//                     <Input
//                       {...field}
//                       type="text"
//                       placeholder="Enter Plain Text"
//                       onChange={(e) => setPlaintext(e.target.value)}
//                       value={plaintext}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="plainText"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Cipher Text</FormLabel>
//                   <FormControl>
//                     <Input
//                       {...field}
//                       type="text"
//                       placeholder="Enter Ciper Text"
//                       onChange={(e) => setCiphertext(e.target.value)}
//                       value={ciphertext}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <div className="flex gap-4">
//               <FormField
//                 control={form.control}
//                 name="plainText"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Key</FormLabel>
//                     <FormControl>
//                       <Input
//                         {...field}
//                         type="text"
//                         placeholder="Enter Key"
//                         onChange={(e) => setKey(e.target.value)}
//                         value={key}
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="plainText"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Shift Caeser</FormLabel>
//                     <FormControl>
//                       <Input
//                         {...field}
//                         type="text"
//                         placeholder="Enter Shift Caeser"
//                         onChange={(e) => setShiftCaesar(e.target.value)}
//                         value={shiftCaesar}
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </div>
//             <Button onClick={handleEncrypt} className="w-full">
//               Encrypt Text
//             </Button>
//             <Button onClick={handleDecrypt} className="w-full">
//               Decrypt Cypher
//             </Button>
//           </div>
//         </form>
//       </Form>
//       <div className="text-center mt-10">
//         <h1> The CypherText is : {ciphertext}</h1>
//       </div>
//     </CardWrapper>
//   );
// }
//
// export default FormSecurity;

// -------------------------------------------------------------------

"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import CardWrapper from "./CardWrraper";

export default function FormSecurity() {
  const [inputText, setInputText] = useState("");
  const [key, setKey] = useState("");
  const [shift, setShift] = useState("");
  const [outputText, setOutputText] = useState("");
  const [isEncrypt, setIsEncrypt] = useState(false);
  const [isDecrypt, setIsDecrypt] = useState(false);

  const processVigenereCipher = (
    text: string,
    key: string,
    isEncrypt: boolean
  ) => {
    let result = "";
    const keyLength = key.length;

    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const charCode = char.toUpperCase().charCodeAt(0);
      const isUpperCase = char === char.toUpperCase();

      if (char.match(/[A-Za-z]/)) {
        const keyChar = key[i % keyLength].toUpperCase().charCodeAt(0);
        let processedCode;

        if (isEncrypt) {
          processedCode = ((charCode - 65 + (keyChar - 65)) % 26) + 65;
          setIsEncrypt(true);
        } else {
          processedCode = ((charCode - 65 - (keyChar - 65) + 26) % 26) + 65;
          setIsDecrypt(true);
        }

        result += isUpperCase
          ? String.fromCharCode(processedCode)
          : String.fromCharCode(processedCode).toLowerCase();
      } else {
        result += char;
      }
    }

    return result;
  };

  const processCaesarCipher = (isEncrypt: boolean) => {
    const shiftAmount = parseInt(shift, 10) % 26;
    const processedText = processVigenereCipher(inputText, key, isEncrypt);

    const caesarResult = processedText
      .split("")
      .map((char) => {
        const isUpperCase = char === char.toUpperCase();
        const charCode = char.toUpperCase().charCodeAt(0);

        if (char.match(/[A-Za-z]/)) {
          let processedCode;
          if (isEncrypt) {
            processedCode = ((charCode - 65 + shiftAmount) % 26) + 65;
          } else {
            processedCode = ((charCode - 65 - shiftAmount + 26) % 26) + 65;
          }

          return isUpperCase
            ? String.fromCharCode(processedCode)
            : String.fromCharCode(processedCode).toLowerCase();
        }

        return char;
      })
      .join("");

    setOutputText(caesarResult);
  };

  return (
    <Tabs defaultValue="Encrypt" className="w-[400px] m-6 md:m-0">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="Encrypt">Encrypt</TabsTrigger>
        <TabsTrigger value="Decrypt">Decrypt</TabsTrigger>
      </TabsList>
      <TabsContent value="Encrypt">
        <Card>
          <CardHeader>
            <CardTitle> Generate Cipher Text</CardTitle>
            <CardDescription>Create A Cipher Text</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="plainText">Plain Text</Label>
              <Input
                id="plainText"
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Pedro Duarte"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="key">Key</Label>
              <Input
                id="key"
                value={key}
                onChange={(e) => setKey(e.target.value)}
                placeholder="peduarte"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="shift">Shift</Label>
              <Input
                id="shift"
                value={shift}
                onChange={(e) => setShift(e.target.value)}
                placeholder="Example : 3"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full"
              onClick={() => processCaesarCipher(true)}
            >
              Encrypt Plain Text
            </Button>
          </CardFooter>
        </Card>
        <br />
        {outputText && isEncrypt && (
          <CardWrapper headerLabel="Encrypt Message">
            <div className="text-center ">{outputText}</div>
          </CardWrapper>
        )}
      </TabsContent>
      <TabsContent value="Decrypt">
        <Card>
          <CardHeader>
            <CardTitle> Decrypt Cipher Text</CardTitle>
            <CardDescription>Create A Cipher Text</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="CipherText">Cipher Text</Label>
              <Input
                id="CipherText"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Example : kdieyqtzvmdp"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="key">Key</Label>
              <Input
                id="key"
                value={key}
                onChange={(e) => setKey(e.target.value)}
                placeholder="Example : peduarte"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="shift">Shift</Label>
              <Input
                id="shift"
                value={shift}
                onChange={(e) => setShift(e.target.value)}
                placeholder="Example : 3"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full"
              onClick={() => processCaesarCipher(false)}
            >
              Decrypt CipherText
            </Button>
          </CardFooter>
        </Card>
        <br />
        {outputText && isDecrypt && (
          <CardWrapper
            headerLabel="Dencrypt Message"
            backButtonHref="/dwa"
            backButtonLabel2="Test"
          >
            <div className="text-center ">{outputText}</div>
          </CardWrapper>
        )}
      </TabsContent>
    </Tabs>
  );
}

// "use client";
// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import CardWrapper from "./CardWrraper";

// export default function FormSecurity() {
//   const [plainText, setPlainText] = useState("");
//   const [cipherText, setCipherText] = useState("");
//   const [key, setKey] = useState("");
//   const [shift, setShift] = useState("");

//   const caesarCipher = (text, shift) => {
//     return text
//       .split("")
//       .map((char) => {
//         if (char.match(/[a-z]/i)) {
//           const code = char.charCodeAt(0);
//           const shifted = code + shift;
//           return String.fromCharCode(shifted);
//         } else {
//           return char;
//         }
//       })
//       .join("");
//   };

//   const feistelNetwork = (text, key) => {
//     const blockSize = Math.ceil(text.length / 2);
//     let left = text.substring(0, blockSize);
//     let right = text.substring(blockSize);

//     for (let round = 0; round < 16; round++) {
//       const temp = right;
//       right = xor(left, feistelFunction(right, key));
//       left = temp;
//     }

//     return left + right;
//   };

//   const xor = (a, b) => {
//     let result = "";
//     for (let i = 0; i < a.length; i++) {
//       result += String.fromCharCode(a.charCodeAt(i) ^ b.charCodeAt(i));
//     }
//     return result;
//   };

//   const feistelFunction = (data, key) => {
//     // Example: Simple XOR-based feistel function
//     return xor(data, key);
//   };

//   const combineCaesarAndFeistel = (text, caesarShift, feistelKey) => {
//     const caesarResult = caesarCipher(text, caesarShift);
//     const feistelResult = feistelNetwork(caesarResult, feistelKey);
//     return feistelResult;
//   };

//   const processCipher = (isEncrypt) => {
//     const caesarShiftValue = parseInt(shift, 10);

//     if (isEncrypt) {
//       const combinedResult = combineCaesarAndFeistel(
//         plainText,
//         caesarShiftValue,
//         key
//       );
//       setCipherText(combinedResult);
//     } else {
//       // Decrypt using the reverse order of the Caesar and Feistel operations
//       // Step 1: Reverse the Feistel operation
//       const reversedFeistel = feistelNetwork(cipherText, key);
//       // Step 2: Reverse the Caesar operation
//       const decryptedText = caesarCipher(reversedFeistel, -caesarShiftValue);
//       setPlainText(decryptedText);
//     }
//   };

//   return (
//     <Tabs defaultValue="Encrypt" className="w-[400px] m-6 md:m-0">
//       <TabsList className="grid w-full grid-cols-2">
//         <TabsTrigger value="Encrypt">Encrypt</TabsTrigger>
//         <TabsTrigger value="Decrypt">Decrypt</TabsTrigger>
//       </TabsList>
//       <TabsContent value="Encrypt">
//         <Card>
//           <CardHeader>
//             <CardTitle> Generate Cipher Text</CardTitle>
//             <CardDescription>Create A Cipher Text</CardDescription>
//           </CardHeader>
//           <CardContent className="space-y-2">
//             <div className="space-y-1">
//               <Label htmlFor="plainText">Plain Text</Label>
//               <Input
//                 placeholder="Pedro Duarte"
//                 value={plainText}
//                 onChange={(e) => setPlainText(e.target.value)}
//               />
//             </div>
//             <div className="space-y-1">
//               <Label htmlFor="key">Key</Label>
//               <Input
//                 id="key"
//                 placeholder="peduarte"
//                 value={key}
//                 onChange={(e) => setKey(e.target.value)}
//               />
//             </div>
//             <div className="space-y-1">
//               <Label htmlFor="shift">Shift</Label>
//               <Input
//                 id="shift"
//                 placeholder="Example : 3"
//                 value={shift}
//                 onChange={(e) => setShift(e.target.value)}
//               />
//             </div>
//           </CardContent>
//           <CardFooter>
//             <Button className="w-full" onClick={() => processCipher(true)}>
//               Encrypt Plain Text
//             </Button>
//           </CardFooter>
//         </Card>
//         <br />
//         {cipherText && (
//           <CardWrapper headerLabel="Encrypt Message">
//             <div className="text-center ">{cipherText}</div>
//           </CardWrapper>
//         )}
//       </TabsContent>
//       <TabsContent value="Decrypt">
//         <Card>
//           <CardHeader>
//             <CardTitle> Decrypt Cipher Text</CardTitle>
//             <CardDescription>Create A Cipher Text</CardDescription>
//           </CardHeader>
//           <CardContent className="space-y-2">
//             <div className="space-y-1">
//               <Label htmlFor="CipherText">Cipher Text</Label>
//               <Input
//                 id="CipherText"
//                 placeholder="Example : kdieyqtzvmdp"
//                 onChange={(e) => setCipherText(e.target.value)}
//               />
//             </div>
//             <div className="space-y-1">
//               <Label htmlFor="key">Key</Label>
//               <Input
//                 id="key"
//                 placeholder="Example : peduarte"
//                 value={key}
//                 onChange={(e) => setKey(e.target.value)}
//               />
//             </div>
//             <div className="space-y-1">
//               <Label htmlFor="shift">Shift</Label>
//               <Input
//                 id="shift"
//                 placeholder="Example : 3"
//                 value={shift}
//                 onChange={(e) => setShift(e.target.value)}
//               />
//             </div>
//           </CardContent>
//           <CardFooter>
//             <Button className="w-full" onClick={() => processCipher(false)}>
//               Decrypt CipherText
//             </Button>
//           </CardFooter>
//         </Card>
//         <br />
//         {plainText && (
//           <CardWrapper
//             headerLabel="Dencrypt Message"
//             backButtonHref="/dwa"
//             backButtonLabel2="Test"
//           >
//             <div className="text-center ">{plainText}</div>
//           </CardWrapper>
//         )}
//       </TabsContent>
//     </Tabs>
//   );
// }
