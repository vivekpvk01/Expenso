import {
  Upload,
  FileImage,
  FileText,
  FileSpreadsheet,
  File,
  CheckCircle2,
} from "lucide-react"

const formats = [
  { icon: FileImage, label: "Images", ext: "JPG, PNG, HEIC" },
  { icon: FileText, label: "PDF", ext: "Invoices, receipts" },
  { icon: File, label: "Word", ext: "DOCX, DOC" },
  { icon: FileSpreadsheet, label: "Excel", ext: "XLSX, CSV" },
]

export function UploadPreview() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-20">
          {/* Upload mockup */}
          <div className="flex-1 w-full max-w-lg">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              {/* Drop zone */}
              <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-border bg-background py-10 px-6 text-center">
                <div className="rounded-xl bg-primary/10 p-3 mb-4">
                  <Upload className="size-6 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground mb-1">
                  Drag and drop your files here
                </p>
                <p className="text-xs text-muted-foreground mb-4">
                  or click to browse from your device
                </p>
                <div className="inline-flex rounded-lg bg-primary px-4 py-2 text-xs font-medium text-primary-foreground">
                  Browse Files
                </div>
              </div>

              {/* Processed file example */}
              <div className="mt-4 flex items-center gap-3 rounded-xl border border-border bg-background p-3">
                <div className="rounded-lg bg-success/10 p-2">
                  <CheckCircle2 className="size-4 text-success" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-foreground truncate">
                    Flipkart_order_receipt.pdf
                  </p>
                  <p className="text-[10px] text-muted-foreground">
                    Processed - 3 items extracted
                  </p>
                </div>
                <span className="text-xs font-semibold text-foreground">
                  ₹3,950
                </span>
              </div>
            </div>
          </div>

          {/* Right copy */}
          <div className="flex-1">
            <p className="text-sm font-semibold text-primary mb-3">
              Document Upload
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Upload any financial document
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
              Our intelligent OCR engine supports all major file formats.
              Simply upload and let Expenso extract amounts, dates,
              categories, and merchant details automatically.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {formats.map((f) => (
                <div
                  key={f.label}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card p-4"
                >
                  <div className="rounded-lg bg-primary/10 p-2">
                    <f.icon className="size-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {f.label}
                    </p>
                    <p className="text-[10px] text-muted-foreground">
                      {f.ext}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
