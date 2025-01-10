import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const fieldTypes = {
  "Personal Information": {
    names: "Full names in various formats",
    emails: "Valid email addresses",
    phones: "Phone numbers with country codes",
    addresses: "Street addresses, cities, countries",
    ids: "Unique identifiers",
  },
  "Business Data": {
    companies: "Company names and details",
    departments: "Department names",
    positions: "Job titles and positions",
    products: "Product names and descriptions",
    prices: "Currency amounts and prices",
  },
  "Date & Time": {
    dates: "Past and future dates",
    timestamps: "Unix timestamps",
    timeZones: "Time zones and offsets",
  },
  "Internet & Tech": {
    usernames: "Unique usernames",
    passwords: "Secure password strings",
    domains: "Web domains and URLs",
    ipAddresses: "IPv4 and IPv6 addresses",
  }
}

export function FieldReference() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Field Type Reference</CardTitle>
        <CardDescription>
          Available data types and their descriptions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {Object.entries(fieldTypes).map(([category, types], index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{category}</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  {Object.entries(types).map(([type, description], typeIndex) => (
                    <div key={typeIndex} className="grid grid-cols-3 gap-4 text-sm">
                      <div className="font-medium">{type}</div>
                      <div className="col-span-2 text-muted-foreground">{description}</div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}

