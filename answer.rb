# 1. Find the ids of all documents which do not have any pages.
Document.all.select do |document|
    document.pages.length === 0
end

# 2. Return a list of report titles and the total number of pages in the report. Reports which do not have pages may be ignored.
all_reports = []
Report.all.each do |report|
    all_reports.push(report.title) 
end

all_reports
Report.all.count

# 3. How would you determine the percentage of document pages which include a footnote?
Page.all.count / Page.all.where(footnote: null).count * 100

# 4. How would you search the body of a page to look for a specific search string? 
page_body = Page.find(2)
search_string = "search string"

if page_body.include? search_string
   puts "The string has been found."
end

# Any approach is welcome, though you may only use native methods, not gems or other libraries.
