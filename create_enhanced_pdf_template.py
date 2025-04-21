from reportlab.lib.pagesizes import A4, letter
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Image, Table, TableStyle
from reportlab.platypus import PageBreak, ListFlowable, ListItem
from reportlab.lib.units import inch, cm
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT
from reportlab.pdfgen import canvas
from reportlab.graphics import renderPDF
from svglib.svglib import svg2rlg
import os
from PIL import Image as PILImage
import io

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

# Create a function to draw gradient elements
def draw_gradient_line(canvas, x1, y1, x2, y2, width=3):
    canvas.saveState()
    canvas.setLineWidth(width)
    
    # Approximate gradient with multiple lines
    steps = 10
    for i in range(steps):
        t = i / float(steps - 1)
        r = RED_GRADIENT_START.red + t * (RED_GRADIENT_END.red - RED_GRADIENT_START.red)
        g = RED_GRADIENT_START.green + t * (RED_GRADIENT_END.green - RED_GRADIENT_START.green)
        b = RED_GRADIENT_START.blue + t * (RED_GRADIENT_END.blue - RED_GRADIENT_START.blue)
        
        canvas.setStrokeColorRGB(r, g, b)
        segment_x1 = x1 + t * (x2 - x1)
        segment_x2 = x1 + (t + 1/float(steps)) * (x2 - x1)
        canvas.line(segment_x1, y1, segment_x2, y2)
    
    canvas.restoreState()

# Create a function for the cover page
def create_cover_page(canvas, doc):
    add_grid_background(canvas, doc)
    canvas.saveState()
    
    # Add logo
    logo_path = os.path.join(os.path.dirname(__file__), 'logo.svg')
    if os.path.exists(logo_path):
        try:
            # Convert SVG to ReportLab drawing
            drawing = svg2rlg(logo_path)
            if drawing:
                # Scale and position the logo
                drawing_width = 150
                drawing_height = 150
                drawing_x = (doc.width/2 + doc.leftMargin) - (drawing_width/2)
                drawing_y = doc.height - 150
                
                # Render the drawing
                renderPDF.draw(drawing, canvas, drawing_x, drawing_y, 
                              width=drawing_width, height=drawing_height)
        except Exception as e:
            print(f"Error rendering SVG: {e}")
            # Fallback to text
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
    draw_gradient_line(canvas, 
                      doc.width/4 + doc.leftMargin, 
                      doc.height/2 - 20, 
                      3*doc.width/4 + doc.leftMargin, 
                      doc.height/2 - 20, 
                      width=3)
    
    # Add particles effect (simulated with small circles)
    canvas.saveState()
    for i in range(50):
        import random
        x = random.randint(0, int(doc.width + doc.leftMargin + doc.rightMargin))
        y = random.randint(0, int(doc.height + doc.topMargin + doc.bottomMargin))
        size = random.uniform(0.5, 2)
        
        # Random color from gradient
        t = random.random()
        r = RED_GRADIENT_START.red + t * (RED_GRADIENT_END.red - RED_GRADIENT_START.red)
        g = RED_GRADIENT_START.green + t * (RED_GRADIENT_END.green - RED_GRADIENT_START.green)
        b = RED_GRADIENT_START.blue + t * (RED_GRADIENT_END.blue - RED_GRADIENT_START.blue)
        
        canvas.setFillColorRGB(r, g, b)
        canvas.circle(x, y, size, fill=1)
    canvas.restoreState()
    
    # Add contact info
    canvas.setFillColor(LIGHT_GRAY)
    canvas.setFont("Helvetica", 12)
    canvas.drawCentredString(doc.width/2 + doc.leftMargin, 100, "www.gomakeit.com | info@gomakeit.com | +1 (555) 123-4567")
    
    canvas.restoreState()

# Create a function for later pages with design elements
def add_page_elements(canvas, doc, pagenum):
    add_grid_background(canvas, doc)
    canvas.saveState()
    
    # Add page number with gradient styling
    canvas.setFillColor(LIGHT_GRAY)
    canvas.setFont("Helvetica", 10)
    canvas.drawRightString(doc.width + doc.leftMargin, 30, f"Page {pagenum}")
    
    # Add small logo or branding element in footer
    canvas.setFillColor(WHITE)
    canvas.setFont("Helvetica-Bold", 10)
    canvas.drawString(doc.leftMargin, 30, "GOMAKEIT")
    
    # Add gradient accent in header
    draw_gradient_line(canvas, 
                      doc.leftMargin, 
                      doc.height + doc.topMargin - 20, 
                      doc.width + doc.leftMargin, 
                      doc.height + doc.topMargin - 20, 
                      width=2)
    
    canvas.restoreState()

# Create a function to generate service icons
def create_service_icon(service_type):
    """Create a simple icon for each service type"""
    from reportlab.graphics.shapes import Drawing, Circle, Rect, Polygon, String
    from reportlab.lib.colors import white, black
    
    d = Drawing(60, 60)
    
    # Background circle
    d.add(Circle(30, 30, 25, fillColor=RED_GRADIENT_START, strokeColor=None))
    
    if service_type == "mockup":
        # Document icon
        d.add(Rect(20, 15, 20, 25, fillColor=white, strokeColor=None))
        d.add(Rect(23, 20, 14, 2, fillColor=BLACK, strokeColor=None))
        d.add(Rect(23, 25, 14, 2, fillColor=BLACK, strokeColor=None))
        d.add(Rect(23, 30, 14, 2, fillColor=BLACK, strokeColor=None))
    elif service_type == "3dmodeling":
        # Cube icon
        d.add(Polygon([20,20, 40,20, 40,40, 20,40], fillColor=white, strokeColor=None))
        d.add(Polygon([25,25, 45,25, 45,45, 25,45], fillColor=BLACK, strokeColor=None))
        d.add(Polygon([20,20, 25,25, 25,45, 20,40], fillColor=LIGHT_GRAY, strokeColor=None))
        d.add(Polygon([40,20, 45,25, 45,45, 40,40], fillColor=LIGHT_GRAY, strokeColor=None))
    elif service_type == "3dprinting":
        # Printer icon
        d.add(Rect(15, 20, 30, 20, fillColor=white, strokeColor=None))
        d.add(Rect(20, 25, 20, 10, fillColor=BLACK, strokeColor=None))
        d.add(Rect(25, 15, 10, 5, fillColor=LIGHT_GRAY, strokeColor=None))
        d.add(Rect(25, 40, 10, 5, fillColor=LIGHT_GRAY, strokeColor=None))
    
    return d

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
        ["100+", "50+", "100k+", "100%"],
        ["Projects Completed", "Happy Clients", "Printing Hours", "Sustainable Materials"]
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
    
    # Mock Up Creation with icon
    mockup_icon = create_service_icon("mockup")
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
    
    # 3D Modelling with icon
    modeling_icon = create_service_icon("3dmodeling")
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
    
    # Custom 3D Printing with icon
    printing_icon = create_service_icon("3dprinting")
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
    
    # Create a table for portfolio items with visual elements
    portfolio_data = [
        ["Mock Up", "3D Modeling", "3D Printing"],
        ["Product Mockup Collection", "Architectural 3D Models", "Custom 3D Printed Components"],
        ["Realistic product mockups showcasing designs in various real-world contexts.", 
         "Detailed 3D models of architectural structures with precise measurements.", 
         "Custom-designed and 3D printed components for specialized applications."]
    ]
    
    portfolio_table = Table(portfolio_data, colWidths=[doc.width/3]*3)
    portfolio_table.setStyle(TableStyle([
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, 0), 14),
        ('TEXTCOLOR', (0, 0), (-1, 0), RED_GRADIENT_START),
        ('FONTNAME', (0, 1), (-1, 1), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 1), (-1, 1), 12),
        ('TEXTCOLOR', (0, 1), (-1, 1), WHITE),
        ('FONTNAME', (0, 2), (-1, 2), 'Helvetica'),
        ('FONTSIZE', (0, 2), (-1, 2), 10),
        ('TEXTCOLOR', (0, 2), (-1, 2), LIGHT_GRAY),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 10),
        ('BOTTOMPADDING', (0, 1), (-1, 1), 10),
    ]))
    
    elements.append(portfolio_table)
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
    
    # Process steps with visual elements
    process_data = [
        ["1", "2", "3"],
        ["Consultation", "Design & Planning", "Mockup Creation"],
        ["We discuss your project requirements, goals, and specification
(Content truncated due to size limit. Use line ranges to read in chunks)