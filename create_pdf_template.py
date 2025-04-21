from reportlab.lib.pagesizes import A4, letter
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Image, Table, TableStyle
from reportlab.platypus import PageBreak, ListFlowable, ListItem
from reportlab.lib.units import inch, cm
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT
from reportlab.pdfgen import canvas
import os

# Define colors based on website
BLACK = colors.HexColor('#000000')
WHITE = colors.HexColor('#FFFFFF')
LIGHT_GRAY = colors.HexColor('#CCCCCC')
RED_GRADIENT_START = colors.HexColor('#ff4d4d')
RED_GRADIENT_END = colors.HexColor('#f9cb28')

# Create a function to draw the grid background
def add_grid_background(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(BLACK)
    canvas.rect(0, 0, doc.width + doc.leftMargin + doc.rightMargin, 
                doc.height + doc.topMargin + doc.bottomMargin, fill=1)
    
    # Draw grid lines
    canvas.setStrokeColor(colors.HexColor('#1E1E1E'))
    canvas.setStrokeAlpha(0.3)
    
    # Vertical lines
    for x in range(0, int(doc.width + doc.leftMargin + doc.rightMargin), 50):
        canvas.line(x, 0, x, doc.height + doc.topMargin + doc.bottomMargin)
    
    # Horizontal lines
    for y in range(0, int(doc.height + doc.topMargin + doc.bottomMargin), 50):
        canvas.line(0, y, doc.width + doc.leftMargin + doc.rightMargin, y)
    
    canvas.restoreState()

# Create a function for the cover page
def create_cover_page(canvas, doc):
    add_grid_background(canvas, doc)
    canvas.saveState()
    
    # Add logo
    logo_path = os.path.join(os.path.dirname(__file__), 'logo.svg')
    if os.path.exists(logo_path):
        # For SVG, we'll need to convert or use a placeholder
        # Since ReportLab doesn't directly support SVG, we'll use a text placeholder
        canvas.setFillColor(WHITE)
        canvas.setFont("Helvetica-Bold", 24)
        canvas.drawCentredString(doc.width/2 + doc.leftMargin, doc.height - 100, "GOMAKEIT")
    
    # Add title
    canvas.setFillColor(WHITE)
    canvas.setFont("Helvetica-Bold", 36)
    canvas.drawCentredString(doc.width/2 + doc.leftMargin, doc.height/2 + 50, "Premium Print On Demand Services")
    
    # Add tagline
    canvas.setFillColor(LIGHT_GRAY)
    canvas.setFont("Helvetica", 18)
    canvas.drawCentredString(doc.width/2 + doc.leftMargin, doc.height/2, "Bringing Your Ideas To Life")
    
    # Add gradient accent line
    canvas.setStrokeColorRGB(1, 0.3, 0.3)  # Red-orange gradient approximation
    canvas.setLineWidth(3)
    canvas.line(doc.width/4 + doc.leftMargin, doc.height/2 - 20, 
                3*doc.width/4 + doc.leftMargin, doc.height/2 - 20)
    
    # Add contact info
    canvas.setFillColor(LIGHT_GRAY)
    canvas.setFont("Helvetica", 12)
    canvas.drawCentredString(doc.width/2 + doc.leftMargin, 100, "www.gomakeit.com | info@gomakeit.com | +1 (555) 123-4567")
    
    canvas.restoreState()

# Create the PDF document
def create_pdf():
    doc = SimpleDocTemplate(
        "GOMAKEIT_Company_Template.pdf",
        pagesize=letter,
        leftMargin=72,
        rightMargin=72,
        topMargin=72,
        bottomMargin=72
    )
    
    # Create styles
    styles = getSampleStyleSheet()
    
    # Custom styles
    title_style = ParagraphStyle(
        'Title',
        parent=styles['Title'],
        fontName='Helvetica-Bold',
        fontSize=24,
        textColor=WHITE,
        alignment=TA_CENTER,
        spaceAfter=20
    )
    
    heading_style = ParagraphStyle(
        'Heading',
        parent=styles['Heading1'],
        fontName='Helvetica-Bold',
        fontSize=18,
        textColor=WHITE,
        spaceAfter=12
    )
    
    subheading_style = ParagraphStyle(
        'SubHeading',
        parent=styles['Heading2'],
        fontName='Helvetica-Bold',
        fontSize=14,
        textColor=WHITE,
        spaceAfter=10
    )
    
    body_style = ParagraphStyle(
        'Body',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=12,
        textColor=WHITE,
        spaceAfter=10
    )
    
    light_body_style = ParagraphStyle(
        'LightBody',
        parent=body_style,
        textColor=LIGHT_GRAY
    )
    
    # Content elements
    elements = []
    
    # First page is handled by the onFirstPage callback
    elements.append(PageBreak())
    
    # Introduction/About Section
    elements.append(Paragraph("About GOMAKEIT", title_style))
    elements.append(Spacer(1, 20))
    
    about_text = """
    At gomakeit, we specialize in premium print on demand services that transform your creative 
    concepts into tangible, high-quality products. Our team of experts combines technical 
    expertise with artistic vision to deliver exceptional results for businesses and individuals.
    
    Whether you need custom merchandise, promotional materials, or product visualizations, 
    we provide end-to-end solutions that meet your specific requirements and exceed your expectations.
    """
    elements.append(Paragraph(about_text, body_style))
    elements.append(Spacer(1, 20))
    
    # Key statistics
    stats_data = [
        ["500+", "100+", "50+", "100%"],
        ["Projects Completed", "Happy Clients", "Product Categories", "Sustainable Materials"]
    ]
    
    stats_table = Table(stats_data, colWidths=[doc.width/4]*4)
    stats_table.setStyle(TableStyle([
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, 0), 20),
        ('TEXTCOLOR', (0, 0), (-1, 0), RED_GRADIENT_START),
        ('FONTNAME', (0, 1), (-1, 1), 'Helvetica'),
        ('FONTSIZE', (0, 1), (-1, 1), 12),
        ('TEXTCOLOR', (0, 1), (-1, 1), LIGHT_GRAY),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 10),
    ]))
    
    elements.append(stats_table)
    elements.append(Spacer(1, 30))
    elements.append(PageBreak())
    
    # Services Overview
    elements.append(Paragraph("Our Services", title_style))
    elements.append(Spacer(1, 20))
    
    # Mock Up Creation
    elements.append(Paragraph("Mock Up Creation", heading_style))
    mockup_text = """
    Our mockup creation service provides realistic visualizations of your products 
    in real-world contexts. Ideal for marketing, social media, and presentations.
    """
    elements.append(Paragraph(mockup_text, body_style))
    
    mockup_features = ListFlowable(
        [
            ListItem(Paragraph("Photorealistic product mockups", light_body_style)),
            ListItem(Paragraph("Lifestyle/contextual scenes", light_body_style)),
            ListItem(Paragraph("Multiple product variations", light_body_style)),
            ListItem(Paragraph("Social media optimized formats", light_body_style))
        ],
        bulletType='bullet',
        start='•'
    )
    elements.append(mockup_features)
    elements.append(Spacer(1, 20))
    
    # 3D Modelling
    elements.append(Paragraph("3D Modelling", heading_style))
    modeling_text = """
    Our professional 3D modeling services transform your concepts into detailed digital 
    models with precision and creativity. Perfect for product development, visualization, 
    and manufacturing.
    """
    elements.append(Paragraph(modeling_text, body_style))
    
    modeling_features = ListFlowable(
        [
            ListItem(Paragraph("Product design modelling", light_body_style)),
            ListItem(Paragraph("Architectural visualization", light_body_style)),
            ListItem(Paragraph("Technical and mechanical modeling", light_body_style)),
            ListItem(Paragraph("Print-ready, high-resolution files", light_body_style))
        ],
        bulletType='bullet',
        start='•'
    )
    elements.append(modeling_features)
    elements.append(Spacer(1, 20))
    
    # Custom 3D Printing
    elements.append(Paragraph("Custom 3D Printing", heading_style))
    printing_text = """
    We deliver high-quality custom 3D printed parts tailored to your business needs. 
    Our advanced 3D printing capabilities produce functional prototypes, custom components, 
    and small production runs.
    """
    elements.append(Paragraph(printing_text, body_style))
    
    printing_features = ListFlowable(
        [
            ListItem(Paragraph("Functional prototypes", light_body_style)),
            ListItem(Paragraph("Custom parts/components", light_body_style)),
            ListItem(Paragraph("Various materials and finishes", light_body_style))
        ],
        bulletType='bullet',
        start='•'
    )
    elements.append(printing_features)
    elements.append(Spacer(1, 20))
    elements.append(PageBreak())
    
    # Portfolio Highlights
    elements.append(Paragraph("Portfolio Highlights", title_style))
    elements.append(Spacer(1, 20))
    
    portfolio_text = """
    Explore our collection of premium print on demand projects and see how we bring creative ideas to life.
    Below are examples of our work across our three main service categories.
    """
    elements.append(Paragraph(portfolio_text, body_style))
    elements.append(Spacer(1, 20))
    
    # Mock Up Example
    elements.append(Paragraph("Product Mockup Collection", subheading_style))
    mockup_portfolio = """
    Realistic product mockups showcasing designs in various real-world contexts, 
    perfect for marketing and presentations.
    """
    elements.append(Paragraph(mockup_portfolio, light_body_style))
    elements.append(Spacer(1, 15))
    
    # 3D Modeling Example
    elements.append(Paragraph("Architectural 3D Models", subheading_style))
    modeling_portfolio = """
    Detailed 3D models of architectural structures with precise measurements and realistic texturing.
    """
    elements.append(Paragraph(modeling_portfolio, light_body_style))
    elements.append(Spacer(1, 15))
    
    # 3D Printing Example
    elements.append(Paragraph("Custom 3D Printed Components", subheading_style))
    printing_portfolio = """
    Custom-designed and 3D printed components for specialized applications with high precision.
    """
    elements.append(Paragraph(printing_portfolio, light_body_style))
    elements.append(Spacer(1, 30))
    elements.append(PageBreak())
    
    # Process Overview
    elements.append(Paragraph("Our Process", title_style))
    elements.append(Spacer(1, 20))
    
    process_text = """
    We follow a streamlined process to ensure high-quality results for every project.
    """
    elements.append(Paragraph(process_text, body_style))
    elements.append(Spacer(1, 20))
    
    # Process steps
    process_data = [
        ["1", "2", "3"],
        ["Consultation", "Design & Planning", "Mockup Creation"],
        ["We discuss your project requirements, goals, and specifications to understand your vision.", 
         "Our team creates or adapts designs, selects materials, and plans the production process.", 
         "We create digital mockups for your approval before proceeding to production."]
    ]
    
    process_table1 = Table(process_data, colWidths=[doc.width/3]*3)
    process_table1.setStyle(TableStyle([
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, 0), 18),
        ('TEXTCOLOR', (0, 0), (-1, 0), RED_GRADIENT_START),
        ('FONTNAME', (0, 1), (-1, 1), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 1), (-1, 1), 14),
        ('TEXTCOLOR', (0, 1), (-1, 1), WHITE),
        ('FONTNAME', (0, 2), (-1, 2), 'Helvetica'),
        ('FONTSIZE', (0, 2), (-1, 2), 10),
        ('TEXTCOLOR', (0, 2), (-1, 2), LIGHT_GRAY),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 10),
        ('BOTTOMPADDING', (0, 1), (-1, 1), 10),
    ]))
    
    elements.append(process_table1)
    elements.append(Spacer(1, 20))
    
    process_data2 = [
        ["4", "5", "6"],
        ["Production", "Quality Control", "Delivery"],
        ["Once approved, we proceed with high-quality printing and production of your items.", 
         "Every item undergoes rigorous quality checks to ensure it meets our high standards.", 
         "We carefully package and deliver your finished products on time and in perfect condition."]
    ]
    
    process_table2 = Table(process_data2, colWidths=[doc.width/3]*3)
    process_table2.setStyle(TableStyle([
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, 0), 18),
        ('TEXTCOLOR', (0, 0), (-1, 0), RED_GRADIENT_START),
        ('FONTNAME', (0, 1), (-1, 1), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 1), (-1, 1), 14),
        ('TEXTCOLOR', (0, 1), (-1, 1), WHITE),
        ('FONTNAME', (0, 2), (-1, 2), 'Helvetica'),
        ('FONTSIZE', (0, 2), (-1, 2), 10),
        ('TEXTCOLOR', (0, 2), (-1, 2), LIGHT_GRAY),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 10),
        ('BOTTOMPADDING', (0, 1), (-1, 1), 10),
    ]))
    
    elements.append(process_table2)
    elements.append(Spacer(1, 30))
    elements.append(PageBreak())
    
    # Contact/Call to Action
    elements.append(Paragraph("Ready to Bring Your Ideas to Life?", title_style))
    elements.append(Spacer(1, 20))
    
    cta_text = """
    Contact us today to discuss your project and discover how our premium print on demand 
    services can help you achieve your goals.
    """
    elements.append(Paragraph(cta_text, body_style))
    elements.append(Spacer(1, 30))
    
    contact_data = [
        ["Website", "Email", "Phone"],
        ["www.gomakeit.com", "info@gomakeit.com", "+1 (555) 123-4567"]
    ]
    
    contact_table = Table(contact_data, colWidths=[doc.width/3]*3)
    contact_table.setStyle(TableStyle([
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, 0), 14),
        ('TEXTCOLOR', (0, 0), (-1, 0), WHITE),
        ('FONTNAME', (0, 1), (-1, 1), 'Helvetica'),
        ('FONTSIZE', (0, 1), (-1, 1), 12),
        ('TEXTCOLOR', (0, 1), (-1, 1), LIGHT_GRAY),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 10),
    ]))
    
    elements.append(contact_table)
    
    # Build the PDF
    doc.build(elements, onFirstPage=create_cover_page, onLaterPages=add_grid_background)
    
    return os.path.abspath("GOMAKEIT_Company_Template.pdf")

if __name__ == "__main__":
    pdf_path = create_pdf()
    print(f"PDF created successfully at: {pdf_path}")
