"use client";
import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { cn } from "@/lib/utils";
import { Upload, Trash2, FileUp } from "lucide-react";
const FileUploader = () => {
  const {
    isDragAccept,
    isDragReject,
    acceptedFiles,
    getRootProps,
    getInputProps,
    fileRejections,
    open,
  } = useDropzone({
    noClick: true,
    noKeyboard: true,
    multiple: false,
    maxFiles: 1,
    maxSize: 1000000,
  });
  const [accept, setAccept] = useState(acceptedFiles);
  useEffect(() => {
    console.log("A : ", acceptedFiles);
    console.log(fileRejections);
    setAccept(acceptedFiles);
  }, [acceptedFiles, fileRejections]);
  //   *TODO : config with all mode pro,register and free mode
  return (
    <main className="p-2 h-full flex flex-col">
      <section className="w-full h-full">
        <div
          {...getRootProps({
            className: cn(
              "border-2 p-2 border-dashed bg-[#f8f8f8] h-full min-h-[250px] rounded-lg border-gray-300",
              isDragAccept && "border-teal-500",
              isDragReject && "border-red-500"
            ),
          })}>
          <input {...getInputProps()} />
          <div className="flex flex-col space-y-4 items-center justify-center h-full">
            <button onClick={open} className="p-2 rounded-lg bg-white border">
              <Upload className="w-8 h-8" />
            </button>
            <div className="text-center">
              <h1 className="font-semibold m-0 text-gray-700 text-xl">
                Drop yours files here or browse
              </h1>
              <p className="font-medium text-lg text-gray-500">
                Max file size up to 1MB
              </p>
            </div>
          </div>
        </div>
      </section>
      {fileRejections.length === 0 && accept.length === 1 ? (
        <div className="mt-4">
          <h1 className="font-semibold space-x-2 flex items-centers text-lg mb-2">
            <FileUp />
            <span>Files</span>
          </h1>
          {/* TODO: overflow - y auto set */}
          <div className="">
            <aside className="flex items-center bg-white border justify-between w-full p-3 space-x-4 rounded-lg">
              <div className="space-x-3 flex items-center">
                <p className="p-2 uppercase font-bold text-lg rounded-lg bg-[#f8f8f8] border-2 text-gray-300">
                  {accept[0].name.split(".")[1]}
                </p>
                <p className="truncate font-semibold text-gray-700 text-lg">
                  {accept[0].name}
                </p>
              </div>
              <Trash2
                onClick={() => setAccept([])}
                className="w-6 h-6 text-gray-800 cursor-pointer"
              />
            </aside>
          </div>
        </div>
      ) : (
        <p className="mt-4 text-center text-lg text-red-500">
          {fileRejections[0]?.errors[0].message}
        </p>
      )}
    </main>
  );
};

export default FileUploader;
