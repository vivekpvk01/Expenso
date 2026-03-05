"use client"

import { useState, useCallback } from "react"
import {
  Upload,
  FileText,
  Image,
  X,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Pencil,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

interface UploadedFile {
  id: string
  name: string
  size: number
  type: string
  status: "uploading" | "success" | "error"
  progress: number
  extracted?: {
    merchant: string
    amount: string
    date: string
    category: string
  }
}

const acceptedTypes = [
  "image/jpeg",
  "image/png",
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
]

export default function UploadPage() {
  const [files, setFiles] = useState<UploadedFile[]>([])
  const [dragOver, setDragOver] = useState(false)

  const simulateUpload = useCallback((file: File) => {
    const id = `${Date.now()}-${Math.random()}`
    const uploadFile: UploadedFile = {
      id,
      name: file.name,
      size: file.size,
      type: file.type,
      status: "uploading",
      progress: 0,
    }
    setFiles((prev) => [...prev, uploadFile])

    let progress = 0
    const interval = setInterval(() => {
      progress += Math.random() * 30
      if (progress >= 100) {
        progress = 100
        clearInterval(interval)
        setFiles((prev) =>
          prev.map((f) =>
            f.id === id
              ? {
                  ...f,
                  status: "success",
                  progress: 100,
                  extracted: {
                    merchant: "Auto-detected Merchant",
                    amount: `$${(Math.random() * 200 + 10).toFixed(2)}`,
                    date: new Date().toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    }),
                    category: ["Groceries", "Dining", "Transport", "Utilities"][
                      Math.floor(Math.random() * 4)
                    ],
                  },
                }
              : f
          )
        )
      } else {
        setFiles((prev) =>
          prev.map((f) => (f.id === id ? { ...f, progress } : f))
        )
      }
    }, 300)
  }, [])

  function handleDrop(e: React.DragEvent) {
    e.preventDefault()
    setDragOver(false)
    const droppedFiles = Array.from(e.dataTransfer.files)
    droppedFiles.forEach((file) => {
      if (acceptedTypes.includes(file.type)) {
        simulateUpload(file)
      }
    })
  }

  function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const selected = e.target.files ? Array.from(e.target.files) : []
    selected.forEach((file) => simulateUpload(file))
    e.target.value = ""
  }

  function removeFile(id: string) {
    setFiles((prev) => prev.filter((f) => f.id !== id))
  }

  function formatSize(bytes: number) {
    if (bytes < 1024) return `${bytes} B`
    if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KB`
    return `${(bytes / 1048576).toFixed(1)} MB`
  }

  return (
    <>
      <div>
        <h2 className="text-xl font-bold text-foreground">
          Upload Bills & Documents
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          Drag and drop or browse to upload receipts and financial documents
        </p>
      </div>

      {/* Drop Zone */}
      <div
        onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        className={cn(
          "bg-card border-2 border-dashed rounded-xl p-12 text-center transition-colors",
          dragOver ? "border-primary bg-primary/5" : "border-border"
        )}
      >
        <div className="flex flex-col items-center gap-4">
          <div className="bg-primary/10 p-4 rounded-full">
            <Upload className="size-8 text-primary" />
          </div>
          <div>
            <p className="text-foreground font-semibold">
              Drop your files here, or{" "}
              <label className="text-primary hover:text-primary/80 cursor-pointer underline">
                browse
                <input
                  type="file"
                  multiple
                  accept=".jpg,.jpeg,.png,.pdf,.docx,.xlsx"
                  onChange={handleFileSelect}
                  className="sr-only"
                />
              </label>
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Supports JPG, PNG, PDF, DOCX, XLSX
            </p>
          </div>
        </div>
      </div>

      {/* Uploaded files list */}
      {files.length > 0 && (
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold text-foreground">Uploaded Files</h3>
          {files.map((file) => (
            <div
              key={file.id}
              className="bg-card rounded-xl border border-border shadow-sm overflow-hidden"
            >
              <div className="p-4 flex items-center gap-4">
                <div className="bg-secondary p-2.5 rounded-lg shrink-0">
                  {file.type.startsWith("image") ? (
                    <Image className="size-5 text-muted-foreground" />
                  ) : (
                    <FileText className="size-5 text-muted-foreground" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-foreground truncate">
                      {file.name}
                    </p>
                    <div className="flex items-center gap-2 shrink-0 ml-2">
                      {file.status === "uploading" && (
                        <Loader2 className="size-4 text-primary animate-spin" />
                      )}
                      {file.status === "success" && (
                        <CheckCircle2 className="size-4 text-success" />
                      )}
                      {file.status === "error" && (
                        <AlertCircle className="size-4 text-destructive" />
                      )}
                      <button
                        onClick={() => removeFile(file.id)}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <X className="size-4" />
                      </button>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {formatSize(file.size)}
                  </p>
                  {file.status === "uploading" && (
                    <div className="w-full bg-secondary rounded-full h-1.5 mt-2">
                      <div
                        className="bg-primary h-1.5 rounded-full transition-all duration-300"
                        style={{ width: `${file.progress}%` }}
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Extracted data preview */}
              {file.extracted && (
                <div className="px-4 pb-4 pt-0">
                  <div className="bg-secondary/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-semibold text-foreground">
                        Extracted Data
                      </h4>
                      <button className="flex items-center gap-1 text-xs text-primary font-medium">
                        <Pencil className="size-3" />
                        Edit
                      </button>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      <div>
                        <Label className="text-xs text-muted-foreground">Merchant</Label>
                        <p className="text-sm font-medium text-foreground mt-0.5">
                          {file.extracted.merchant}
                        </p>
                      </div>
                      <div>
                        <Label className="text-xs text-muted-foreground">Amount</Label>
                        <p className="text-sm font-medium text-foreground mt-0.5">
                          {file.extracted.amount}
                        </p>
                      </div>
                      <div>
                        <Label className="text-xs text-muted-foreground">Date</Label>
                        <p className="text-sm font-medium text-foreground mt-0.5">
                          {file.extracted.date}
                        </p>
                      </div>
                      <div>
                        <Label className="text-xs text-muted-foreground">Category</Label>
                        <p className="text-sm font-medium text-foreground mt-0.5">
                          {file.extracted.category}
                        </p>
                      </div>
                    </div>
                    <Button className="mt-3 w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90" size="sm">
                      Save Transaction
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  )
}
