"use client";
import { Snippet } from "@nextui-org/react";
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
import { FormError } from "./form-error";

export default function FormSecurity() {
  const [inputText, setInputText] = useState("");
  const [key, setKey] = useState("");
  const [shift, setShift] = useState("");
  const [outputText, setOutputText] = useState("");
  const [isEncrypt, setIsEncrypt] = useState(false);
  const [isDecrypt, setIsDecrypt] = useState(false);
  const [error, setError] = useState(false);

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
    if (!inputText || !key || !shift) {
      setError(true);
      return;
    }
    setError(false);
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
                onChange={(e) => setKey(e.target.value)}
                placeholder="peduarte"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="shift">Shift</Label>
              <Input
                id="shift"
                onChange={(e) => setShift(e.target.value)}
                placeholder="Example : 3"
              />
            </div>
          </CardContent>
          {error && <FormError message="All input Are Required" />}
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
            <div className="text-center w-full">
              <Snippet color="success" className="w-full ">
                {outputText}
              </Snippet>
            </div>
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
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Example : kdieyqtzvmdp"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="key">Key</Label>
              <Input
                id="key"
                onChange={(e) => setKey(e.target.value)}
                placeholder="Example : peduarte"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="shift">Shift</Label>
              <Input
                id="shift"
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
            <div className="text-center rounded-md py-2 text-sm bg-green-100 text-zinc-900">
              {outputText}
            </div>
          </CardWrapper>
        )}
      </TabsContent>
    </Tabs>
  );
}
