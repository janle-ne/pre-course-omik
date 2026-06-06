// Dữ liệu cho Section 1
const section1Data = [
  {
    id: "overview-1",
    chapterNum: "01",
    chapterTitle: "Tổng quan & 7 Nguyên lý Kinh tế Vi mô",
    chapterSub: "Chapter 1: Microeconomics vs Macroeconomics & Seven Principles",
    blocks: [
      {
        type: "raw",
        content: String.raw`
          <div class="concept">
            <div class="concept-title">1. Microeconomics vs. Macroeconomics (Vi mô và Vĩ mô)</div>
            <div class="compare">
              <div class="compare-card">
                <h4>Microeconomics (Kinh tế Vi mô)</h4>
                <p>Là nhánh của kinh tế học đối phó với hành vi của các đơn vị kinh tế cá nhân người tiêu dùng, công ty, người lao động và nhà đầu tư cũng như các thị trường mà các đơn vị này cấu thành.</p>
                <p style="margin-top:8px;"><strong>Trọng tâm:</strong> Là lý thuyết ra quyết định dưới sự khan hiếm kinh tế. (decision making)</p>
              </div>
              <div class="compare-card">
                <h4>Macroeconomics (Kinh tế Vĩ mô)</h4>
                <p>Nhánh kinh tế học giải quyết các biến số kinh tế tổng hợp, chẳng hạn như mức độ và tốc độ tăng trưởng của sản lượng quốc gia, lãi suất, thất nghiệp và lạm phát. (aggregate)</p>
              </div>
            </div>
          </div>

          <div class="concept">
            <div class="concept-title">2. The Themes of Microeconomics (Chủ đề cốt lõi)</div>
            <div class="concept-body">
              <p>Mọi quyết định đều xoay quanh <strong>Trade-offs (Sự đánh đổi)</strong> vì nguồn lực là có hạn.</p>
              <ul>
                <li><strong>Consumers (Người tiêu dùng):</strong> Đánh đổi giữa việc mua nhiều hàng hóa này thì phải mua ít hàng hóa khác, hoặc đánh đổi giữa tiêu dùng hiện tại và tương lai.</li>
                <li><strong>Workers (Người lao động):</strong> Đánh đổi trong việc chọn việc làm, hoặc giữa thời gian lao động và thời gian nghỉ ngơi (leisure).</li>
                <li><strong>Firms (Công ty):</strong> Đánh đổi xem nên sản xuất cái gì và sử dụng nguồn lực nào trong sản xuất.</li>
              </ul>
              <p>Sự đánh đổi này được quyết định bởi <strong>Prices and Markets (Giá cả và Thị trường)</strong>.</p>
              <ul>
                <li>In a centrally planned economy, prices are set by the government. (Trong nền kinh tế kế hoạch hóa tập trung, chính phủ định giá.)</li>
                <li>In a market economy, prices are determined by the interactions of consumers, workers, and firms in markets-collections of buyers and sellers that together determine the price of a good. (Trong nền kinh tế thị trường, giá được xác định bởi sự tương tác của người tiêu dùng, người lao động và công ty trong thị trường.)</li>
              </ul>
            </div>
          </div>

          <div class="concept">
            <div class="concept-title">3. Seven Principles of Microeconomics (7 Nguyên lý cơ bản)</div>
            <div class="concept-body">
              <p><strong>Principle 1: People face trade-offs (Con người đối mặt với sự đánh đổi).</strong><br>
              Bản chất: "To get something that we like, we have to give up something else that we also like" Để có một thứ, ta phải từ bỏ một thứ khác. Ví dụ: Sinh viên đi dự tiệc đêm trước ngày thi sẽ có ít thời gian học hơn. Ở cấp độ xã hội: Đánh đổi giữa <strong>Efficiency (Hiệu quả)</strong> - xã hội tối đa hóa lợi ích từ nguồn lực khan hiếm, và <strong>Equality (Bình đẳng)</strong> - lợi ích được chia đều. Việc phân phối lại thu nhập từ người giàu sang người nghèo làm tăng bình đẳng nhưng giảm động lực làm việc, thu hẹp "chiếc bánh" kinh tế.</p>

              <p><strong>Principle 2: The cost of something is what you give up to get it (Chi phí cơ hội).</strong><br>
              Bản chất: Chi phí cơ hội (Opportunity Cost) là bất cứ thứ gì phải từ bỏ để đạt được một món đồ. Ví dụ: Chi phí đi học đại học không chỉ là học phí và tiền sách vở, mà còn CỘNG THÊM khoản tiền lương bị mất do không đi làm.</p>

              <p><strong>Principle 3: Rational people think at the margin (Người duy lý suy nghĩ tại điểm cận biên).</strong><br>
              Bản chất: Con người đưa ra quyết định bằng cách đánh giá chi phí và lợi ích của những thay đổi cận biên (những điều chỉnh nhỏ bé). "Make decisions by evaluating costs and benefits of marginal changes"</p>

              <p><strong>Principle 4: People respond to incentives (Con người phản ứng với các động lực/khuyến khích).</strong><br>
              Bản chất: Khuyến khích là thứ xúi giục một người hành động. Khi giá xăng tăng, người tiêu dùng mua nhiều xe hybrid hơn.</p>

              <p><strong>Principle 5: Trade can make everyone better off (Thương mại làm cho mọi người tốt hơn).</strong><br>
              Bản chất: Thương mại cho phép các cá nhân/quốc gia chuyên môn hóa, mua được hàng hóa đa dạng với giá rẻ hơn so với việc tự sản xuất.</p>

              <p><strong>Principle 6: Markets are usually a good way to organize economic activity (Thị trường thường là cách tốt để tổ chức hoạt động kinh tế).</strong><br>
              Bản chất: Nền kinh tế thị trường phân bổ nguồn lực thông qua các quyết định phi tập trung. Adam Smith gọi đây là "Bàn tay vô hình" (Invisible hand), nơi giá cả dẫn dắt các cá nhân tư lợi đưa ra quyết định tối đa hóa phúc lợi kinh tế chung.</p>

              <p><strong>Principle 7: Governments can sometimes improve market outcomes (Chính phủ đôi khi có thể cải thiện kết quả thị trường).</strong><br>
              Bản chất: Chính phủ cần bảo vệ quyền tài sản. Ngoài ra, chính phủ can thiệp để thúc đẩy hiệu quả (tránh Market failures - Thất bại thị trường) do Externality (Ngoại tác - ví dụ: ô nhiễm) hoặc Market power (Quyền lực thị trường - ví dụ: độc quyền) gây ra.</p>
            </div>

            <div class="trap">
              <div class="trap-title">⚠️ Bẫy kinh điển (Red Flags)</div>
              <ul>
                <li><strong>Chi phí cơ hội:</strong> Rất nhiều người quên tính chi phí ẩn (như thời gian hoặc tiền lương bị bỏ lỡ). Nhớ nguyên tắc: \( \text{Opportunity Cost} = \text{Explicit Cost} \) (Chi phí rõ ràng) + \( \text{Implicit Cost} \) (Chi phí ẩn).</li>
                <li><strong>Efficiency (Hiệu quả) vs. Equality (Bình đẳng):</strong> Không có chính sách nào thỏa mãn tối đa cả hai. Đánh thuế người giàu chia cho người nghèo làm tăng Equality nhưng luôn làm giảm Efficiency.</li>
              </ul>
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: "supply-demand",
    chapterNum: "02",
    chapterTitle: "Cung và Cầu (Supply and Demand)",
    chapterSub: "Chapter 2: Đây là công cụ cốt lõi để dự đoán giá cả và tác động của các chính sách.",
    blocks: [
      {
        type: "raw",
        content: String.raw`
          <svg class="svg-chart" viewBox="0 0 350 220" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
            <line x1="40" y1="180" x2="320" y2="180" stroke="#7f8c8d" stroke-width="2"/>
            <line x1="40" y1="20" x2="40" y2="180" stroke="#7f8c8d" stroke-width="2"/>
            <text x="300" y="195" class="axis-label">Quantity</text>
            <text x="10" y="15" class="axis-label">Price</text>
            <line x1="60" y1="40" x2="260" y2="160" stroke="#2471a3" stroke-width="3"/>
            <text x="270" y="165" fill="#2471a3" font-weight="bold">D</text>
            <line x1="90" y1="40" x2="290" y2="160" stroke="#2471a3" stroke-width="2" stroke-dasharray="5"/>
            <text x="300" y="165" fill="#2471a3" font-weight="bold">D'</text>
            <line x1="60" y1="160" x2="260" y2="40" stroke="#c0392b" stroke-width="3"/>
            <text x="270" y="45" fill="#c0392b" font-weight="bold">S</text>
            <line x1="90" y1="160" x2="290" y2="40" stroke="#c0392b" stroke-width="2" stroke-dasharray="5"/>
            <text x="300" y="45" fill="#c0392b" font-weight="bold">S'</text>
          </svg>

          <div class="concept">
            <div class="concept-title">1. The Supply Curve (Đường Cung - S)</div>
            <div class="concept-body">
              <p><strong>Định nghĩa:</strong> Mối quan hệ giữa lượng hàng hóa mà nhà sản xuất sẵn sàng bán và giá của hàng hóa đó.</p>
              <p><strong>Đặc điểm:</strong> Dốc lên (Upward sloping). Giá càng cao, công ty càng muốn sản xuất và bán nhiều hơn.</p>
              <p><strong>Các biến số ảnh hưởng:</strong> Chi phí sản xuất (tiền lương, lãi vay, nguyên vật liệu thô). Nếu chi phí sản xuất giảm, công ty có thể sản xuất cùng một số lượng với giá thấp hơn, đường cung dịch chuyển sang phải (từ \( S \) sang \( S' \)).</p>
            </div>
          </div>

          <div class="concept">
            <div class="concept-title">2. The Demand Curve (Đường Cầu - D)</div>
            <div class="concept-body">
              <p><strong>Định nghĩa:</strong> Mối quan hệ giữa số lượng hàng hóa mà người tiêu dùng sẵn sàng mua và giá của hàng hóa đó.</p>
              <p><strong>Đặc điểm:</strong> Dốc xuống (Downward sloping). Giá càng giảm, người tiêu dùng càng muốn mua nhiều.</p>
              <p><strong>Các biến số ảnh hưởng:</strong> Thu nhập, thời tiết, giá của các hàng hóa khác. Thu nhập cao hơn làm dịch chuyển đường cầu sang phải (từ \( D \) sang \( D' \)).</p>
              
              <p><strong>Hàng hóa liên quan:</strong></p>
              <ul>
                <li><strong>Substitutes (Hàng thay thế):</strong> Giá của hàng hóa này TĂNG dẫn đến lượng cầu của hàng hóa kia TĂNG.</li>
                <li><strong>Complements (Hàng bổ sung):</strong> Giá của hàng hóa này TĂNG dẫn đến lượng cầu của hàng hóa kia GIẢM.</li>
              </ul>
            </div>

            <div class="trap">
              <div class="trap-title">⚠️ BẪY TỬ THẦN TRONG BÀI THI (Phải nhớ!)</div>
              <ul>
                <li><strong>Change in quantity supplied/demanded (Thay đổi LƯỢNG cung/cầu):</strong> Chỉ xảy ra khi GIÁ của chính hàng hóa đó thay đổi \(\Rightarrow\) <strong>Trượt dọc (Movement)</strong> trên chính đường cong đó.</li>
                <li><strong>Change in supply/demand (Thay đổi Cung/Cầu):</strong> Xảy ra khi các YẾU TỐ KHÁC NGOÀI GIÁ (chi phí, thu nhập, sở thích...) thay đổi \(\Rightarrow\) <strong>Dịch chuyển (Shift)</strong> toàn bộ đường cong sang trái hoặc phải.</li>
              </ul>
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: "market",
    chapterNum: "03",
    chapterTitle: "Cơ chế thị trường (Market Mechanism)",
    chapterSub: "Mô hình này chỉ dùng được cho thị trường cạnh tranh.",
    blocks: [
      {
        type: "raw",
        content: String.raw`
          <svg class="svg-chart" viewBox="0 0 350 220" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
            <line x1="40" y1="180" x2="320" y2="180" stroke="#7f8c8d" stroke-width="2"/>
            <line x1="40" y1="20" x2="40" y2="180" stroke="#7f8c8d" stroke-width="2"/>
            <text x="300" y="195" class="axis-label">Quantity</text>
            <text x="10" y="15" class="axis-label">Price</text>
            <line x1="60" y1="40" x2="260" y2="160" stroke="#2471a3" stroke-width="3"/>
            <text x="270" y="165" fill="#2471a3" font-weight="bold">D</text>
            <line x1="60" y1="160" x2="260" y2="40" stroke="#c0392b" stroke-width="3"/>
            <text x="270" y="45" fill="#c0392b" font-weight="bold">S</text>
            <circle cx="160" cy="100" r="5" fill="#1a1a2e"/>
            <line x1="40" y1="100" x2="160" y2="100" stroke="#1a1a2e" stroke-dasharray="4"/>
            <line x1="160" y1="180" x2="160" y2="100" stroke="#1a1a2e" stroke-dasharray="4"/>
            <text x="15" y="104" font-weight="bold" fill="#1a1a2e">P₀</text>
            <text x="152" y="195" font-weight="bold" fill="#1a1a2e">Q₀</text>
            <line x1="40" y1="60" x2="226" y2="60" stroke="#1a7a4a" stroke-dasharray="2"/>
            <text x="15" y="64" font-weight="bold" fill="#1a7a4a">P₁</text>
            <text x="140" y="55" fill="#1a7a4a" font-weight="bold">Surplus</text>
            <line x1="40" y1="140" x2="226" y2="140" stroke="#d35400" stroke-dasharray="2"/>
            <text x="15" y="144" font-weight="bold" fill="#d35400">P₂</text>
            <text x="135" y="135" fill="#d35400" font-weight="bold">Shortage</text>
          </svg>

          <div class="concept">
            <div class="concept-title">3. Market Mechanism (Cơ chế thị trường)</div>
            <div class="concept-body">
              <ul>
                <li><strong>Equilibrium (Cân bằng/Market clearing):</strong> Điểm mà Lượng cung = Lượng cầu \( (Q_s = Q_d) \) tại mức giá \( P_0 \).</li>
                <li><strong>Surplus (Thặng dư/Dư thừa):</strong> Khi \( P > P_0 \), Lượng cung > Lượng cầu. Áp lực thị trường sẽ đẩy giá giảm xuống.</li>
                <li><strong>Shortage (Thiếu hụt):</strong> Khi \( P < P_0 \), Lượng cầu > Lượng cung. Áp lực thị trường sẽ đẩy giá tăng lên.</li>
              </ul>
              <p><strong>Bản chất của "Đường Cung / Đường Cầu"</strong><br>
              Khi các nhà kinh tế học vẽ một đường Cung hoặc Cầu trên đồ thị 2D, họ đang sử dụng một giả định tối quan trọng gọi là <strong>Ceteris Paribus (Các yếu tố khác không đổi)</strong>. Nghĩa là, đường Cầu chỉ cho bạn thấy: "Nếu CHỈ DUY NHẤT mức giá thay đổi, còn thu nhập của khách hàng, thời tiết, xu hướng... tất cả đều giữ nguyên y xì đúc, thì lượng người mua sẽ thay đổi thế nào?"</p>
              <p>Chính vì thế:<br>
              1. <strong>Thay đổi LƯỢNG cầu/cung (Movement along the curve - Trượt dọc):</strong> Chỉ xảy ra khi GIÁ của bản thân món hàng đó thay đổi.<br>
              2. <strong>Thay đổi CẦU/CUNG (Shift in the curve - Dịch chuyển):</strong> Xảy ra khi cái giả định Ceteris Paribus bị phá vỡ.</p>
            </div>

            <div class="exercise">
              <div class="exercise-title">✏️ BÀI TẬP TÌNH HUỐNG (Case Study)</div>
              <div class="ex-q">Giả sử bạn đang vận hành một dự án kinh doanh nước ép và đồ uống tốt cho sức khỏe tên là Freshy Juicy.</div>
              <p><strong>Tình huống 1:</strong> Giá trái cây tươi (nguyên liệu đầu vào) bất ngờ tăng vọt.<br>
              <em>Phân tích:</em> Chi phí sản xuất tăng làm giảm lợi nhuận trên mỗi đơn vị. Do đó, đường Cung (Supply) dịch chuyển sang Trái. Kết quả: Giá cân bằng tăng lên, số lượng tiêu thụ giảm xuống.</p>
              
              <p><strong>Tình huống 2:</strong> Trà sữa (Hàng thay thế - Substitute) vừa bị phanh phui chứa nhiều hóa chất độc hại.<br>
              <em>Phân tích:</em> Sở thích thay đổi hướng tới đồ uống sức khỏe. Đường Cầu (Demand) dịch chuyển sang Phải. Kết quả: Giá và sản lượng bán ra của Freshy Juicy đều tăng!</p>
            </div>
          </div>

          <div class="concept">
            <div class="concept-title">4. Các ví dụ thực tế về Dịch chuyển Cân bằng trong Slide</div>
            <div class="concept-body">
              <ul>
                <li><strong>Trứng (Eggs):</strong> Năm 1970-2010, giá trứng giảm 55%. Cơ giới hóa làm giảm chi phí sản xuất. Đồng thời người dân sợ cholesterol nên bớt ăn trứng.</li>
                <li><strong>Giáo dục Đại học (College):</strong> Chi phí cơ sở vật chất tăng. Nhu cầu học đại học cũng tăng mạnh. Kết quả: Giá học phí và lượng nhập học đều tăng vọt.</li>
                <li><strong>Khoáng sản (Đồng - Copper):</strong> Nhu cầu tăng cả trăm lần. Tuy nhiên, công nghệ khai thác cũng phát triển làm giảm chi phí triệt để. Giá Đồng trong dài hạn gần như đi ngang.</li>
              </ul>
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: "elasticity-time",
    chapterNum: "04",
    chapterTitle: "Độ co giãn (Elasticity) và Thời gian",
    chapterSub: "Đo lường tỷ lệ phần trăm thay đổi của một biến khi biến khác tăng 1%.",
    blocks: [
      {
        type: "raw",
        content: String.raw`
          <div class="concept">
            <div class="concept-title">1. Các loại độ co giãn cơ bản</div>
            <div class="concept-body">
              <p><strong>Price Elasticity of Demand (\( E_p \)):</strong> % thay đổi của lượng cầu khi giá tăng 1%.</p>
              <div class="formula">
                \[ E_p = \frac{\%\Delta Q}{\%\Delta P} \]
                <p style="font-size: 13px;">Note: \( \%\Delta Q = \frac{\text{end value} - \text{start value}}{\text{start value}} \times 100\% \)</p>
              </div>
              <p><strong>Income elasticity of demand:</strong> % thay đổi của lượng cầu khi thu nhập tăng 1%.</p>
              <p><strong>Cross-price elasticity of demand:</strong> % thay đổi lượng cầu hàng hóa A khi giá hàng hóa B tăng 1%.</p>
              <ul>
                <li><strong>Trường hợp 1: Hàng hóa thay thế (Substitute) → Kết quả DƯƠNG (>0)</strong><br>
                Giá A tăng mang dấu +, Lượng B tăng mang dấu +. Cộng chia Cộng ra Cộng. Sự dịch chuyển diễn ra cùng chiều.</li>
                <li><strong>Trường hợp 2: Hàng hóa bổ sung (Complementary) → Kết quả ÂM (<0)</strong><br>
                Giá A tăng mang dấu +, Lượng B giảm mang dấu -. Trừ chia Cộng ra Trừ. Sự dịch chuyển diễn ra ngược chiều.</li>
              </ul>
              <p><strong>Price elasticity of supply:</strong> % thay đổi của lượng cung khi giá tăng 1%.</p>
            </div>
          </div>

          <div class="concept">
            <div class="concept-title">2. Đường Cầu Tuyến Tính (Linear Demand Curve)</div>
            <div class="concept-body">
              <ul>
                <li>Đặc tính: Trên một đường cầu thẳng \( (Q = a - bP) \) độ dốc (slope) là không đổi, nhưng độ co giãn \( (E_p) \) thì thay đổi liên tục.</li>
                <li>Ở mức giá rất cao (gần trục tung): Số lượng nhỏ, độ co giãn lớn (về mặt độ lớn, tiến tới \( -\infty \)).</li>
                <li>Khi di chuyển xuống dưới dọc theo đường cầu, độ co giãn nhỏ dần.</li>
              </ul>
            </div>
          </div>

          <div class="concept">
            <div class="concept-title">3. Ngắn hạn (Short-Run) vs. Dài hạn (Long-Run)</div>
            <div class="concept-body">
              <p><strong>Đối với Cầu (Demand):</strong></p>
              <ul>
                <li><strong>Hàng hóa thông thường (Xăng):</strong> Ngắn hạn ít co giãn. Dài hạn co giãn nhiều hơn.</li>
                <li><strong>Hàng hóa lâu bền (Durable goods - Ô tô):</strong> Ngược lại! Ngắn hạn cầu rất co giãn. Dài hạn ít co giãn hơn.</li>
                <li><strong>Co giãn theo Thu nhập (Income Elasticity):</strong> Hàng hóa bình thường thì \( LR > SR \). Hàng lâu bền thì \( SR > LR \).</li>
              </ul>
              
              <p><strong>Đối với Cung (Supply):</strong></p>
              <ul>
                <li><strong>Đồng nguyên sinh (Primary Copper):</strong> Dài hạn co giãn lớn hơn (có thời gian mở rộng nhà máy).</li>
                <li><strong>Đồng thứ cấp/Tái chế (Secondary Copper):</strong> Ngược lại! Ngắn hạn co giãn mạnh. Dài hạn ít co giãn hơn (vì nguồn cung phế liệu cạn kiệt).</li>
              </ul>
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: "price-controls",
    chapterNum: "05",
    chapterTitle: "Sự can thiệp của chính phủ - Kiểm soát giá",
    chapterSub: "Giá trần (Price Ceiling) và tác động.",
    blocks: [
      {
        type: "raw",
        content: String.raw`
          <div class="concept">
            <div class="concept-body">
              <p><strong>Trần giá (Price Ceiling - \( P_{max} \)):</strong> Chính phủ quy định mức giá tối đa thấp hơn mức giá cân bằng của thị trường \( (P_{max} < P_0) \).</p>
              <ul>
                <li>Hậu quả: Lượng cung giảm, lượng cầu tăng. Kết quả dẫn đến Shortage (Sự thiếu hụt trầm trọng / Excess Demand).</li>
              </ul>
            </div>

            <div class="exercise">
              <div class="exercise-title">✏️ BÀI TẬP MẪU ĐẶC TRƯNG (Wheat Market)</div>
              <div class="ex-q">Phương trình cung: \( Q_S = 1800 + 240P \) | Cầu: \( Q_D = 3550 - 266P \). Tìm giá trị cân bằng.</div>
              <details>
                <summary>Giải thích & Lời giải (Answer & Explanation)</summary>
                <div class="answer">
                  <p>Đặt \( Q_S = Q_D \).</p>
                  \[ 1800 + 240P = 3550 - 266P \]
                  \[ 506P = 1750 \implies P = \$3.46/\text{bushel} \]
                  <p>\( Q_S = 1800 + 240(3.46) = 2630 \text{ millions of bushels} \)</p>
                  <p><strong>Elasticity Demand:</strong> \( \epsilon_D = \frac{\Delta Q}{\Delta P} \times \frac{P}{Q} = -266 \times \frac{3.46}{2630} = -0.35\% \)</p>
                </div>
              </details>
            </div>

            <div class="trap">
              <div class="trap-title">⚠️ BẪY CHẾT NGƯỜI (The Inverse Demand Trap)</div>
              <p>Giáo viên thường cho Hàm cầu ngược: \( P = 13.35 - 0.00376Q \).</p>
              <p>Con số -0.00376 thực chất là \( \frac{\Delta P}{\Delta Q} \). Để tìm đúng hệ số \( (\frac{\Delta Q}{\Delta P}) \):</p>
              <ol>
                <li><strong>Cách 1:</strong> Cô lập biến Q: \( Q = \frac{13.35}{0.00376} - \frac{1}{0.00376}P \approx 3550 - 266P \).</li>
                <li><strong>Cách 2:</strong> Dùng \( \frac{\Delta Q}{\Delta P} = \frac{1}{-0.00376} \approx -266 \).</li>
              </ol>
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: "elasticity-deep",
    chapterNum: "06",
    chapterTitle: "Đi sâu vào Độ co giãn (Elasticity Review)",
    chapterSub: "Phân tích sâu PED, PES và các bẫy thường gặp",
    blocks: [
      {
        type: "raw",
        content: String.raw`
          <div class="concept">
            <div class="concept-title">1. Độ co giãn của Cầu theo giá (PED)</div>
            <div class="concept-body">
              <p><strong>A. Hàng hóa tiêu dùng thông thường / Không lâu bền</strong></p>
              <ul>
                <li>Ngắn hạn (Short-run): Cầu kém co giãn (Inelastic). Đường cầu dốc (steep).</li>
                <li>Dài hạn (Long-run): Cầu co giãn nhiều hơn (Elastic). Đường cầu thoải (flat).</li>
              </ul>
              <p><strong>B. Hàng hóa lâu bền (Durable Goods) - BẪY KINH ĐIỂN</strong></p>
              <ul>
                <li>Ngắn hạn (Short-run): Cầu co giãn nhiều (Elastic).</li>
                <li>Dài hạn (Long-run): Cầu kém co giãn (Inelastic).</li>
              </ul>
            </div>
          </div>

          <div class="concept">
            <div class="concept-title">2. Độ co giãn của Cung theo giá (PES)</div>
            <div class="concept-body">
              <p><strong>Quy luật chung:</strong> Cung trong dài hạn LUÔN LUÔN co giãn nhiều hơn so với ngắn hạn do doanh nghiệp có thời gian mở rộng nhà máy và có thêm sự tham gia của đối thủ mới.</p>
            </div>

            <div class="exercise">
              <div class="exercise-title">✏️ 3. Bài tập Tình huống (Case Study)</div>
              <div class="ex-q">Giá Xe máy và Bánh mì cùng tăng 15%. So sánh sự sụt giảm \( Q_D \) trong 1 tháng (Ngắn hạn) và 5 năm (Dài hạn).</div>
              <details>
                <summary>Trả lời và Giải thích</summary>
                <div class="answer">
                  <p><strong>Với Bánh mì:</strong> 1 tháng giảm nhẹ. 5 năm giảm mạnh.</p>
                  <p><strong>Với Xe máy:</strong> 1 tháng giảm cực mạnh (người dân hoãn mua). 5 năm giảm ít hơn (xe đã hỏng bắt buộc phải mua).</p>
                </div>
              </details>
            </div>

            <div class="keywords">
              <div class="keywords-title">🔑 4. Tổng hợp Keywords</div>
              <div class="kw-list" style="display:block;">
                <ul style="color:var(--gold); font-family:'JetBrains Mono', monospace; font-size:13px;">
                  <li>1. <strong>CUNG (Supply)</strong>? → Dài hạn luôn co giãn HƠN ngắn hạn.</li>
                  <li>2. <strong>CẦU (Demand)</strong>?
                    <ul>
                      <li>Dùng 1 lần → Dài hạn co giãn HƠN.</li>
                      <li>Xài chục năm → Ngắn hạn co giãn HƠN.</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        `
      }
    ]
  },
  {
    id: "mcqs",
    chapterNum: "07",
    chapterTitle: "MCQs: Trọn bộ 29 câu hỏi trắc nghiệm",
    chapterSub: "Tất cả câu hỏi từ tài liệu gốc được giữ nguyên và giải thích chi tiết",
    blocks: [
      {
        type: "raw",
        content: String.raw`
          <div class="concept">
            <div class="exercise"><div class="ex-q">1. In a market economy, supply and demand determine</div>
            <div class="ex-en">a. both the quantity of each good produced and the price at which it is sold.</div>
            <details><summary>Xem Đáp Án</summary><div class="answer"><p><strong>Đáp án: A</strong> - Cung cầu tương tác tạo ra điểm cân bằng xác định cả Giá và Lượng.</p></div></details></div>

            <div class="exercise"><div class="ex-q">2. In a market economy,</div>
            <div class="ex-en">d. supply and demand determine prices and prices, in turn, allocate the economy's scarce resources.</div>
            <details><summary>Xem Đáp Án</summary><div class="answer"><p><strong>Đáp án: D</strong> - Giá đóng vai trò là tín hiệu phân bổ nguồn lực.</p></div></details></div>

            <div class="exercise"><div class="ex-q">3. In a competitive market, the price of a product</div>
            <div class="ex-en">d. None of the above is correct.</div>
            <details><summary>Xem Đáp Án</summary><div class="answer"><p><strong>Đáp án: D</strong> - Giá quyết định bởi sự tương tác của CẢ người mua và người bán, không riêng ai.</p></div></details></div>

            <div class="exercise"><div class="ex-q">4. A competitive market is a market in which</div>
            <div class="ex-en">d. no individual buyer or seller has any significant impact on the market price.</div>
            <details><summary>Xem Đáp Án</summary><div class="answer"><p><strong>Đáp án: D</strong> - Không ai có đủ quyền lực thao túng giá.</p></div></details></div>

            <div class="exercise"><div class="ex-q">5. Assume Diana buys computers in a competitive market. It follows that</div>
            <div class="ex-en">d. None of the above is correct.</div>
            <details><summary>Xem Đáp Án</summary><div class="answer"><p><strong>Đáp án: D</strong></p></div></details></div>

            <div class="exercise"><div class="ex-q">6. An increase in quantity demanded</div>
            <div class="ex-en">a. results in a movement downward and to the right along a demand curve.</div>
            <details><summary>Xem Đáp Án</summary><div class="answer"><p><strong>Đáp án: A</strong> - "Quantity demanded" tăng chỉ khi giá giảm → Trượt (movement) dọc xuống dưới.</p></div></details></div>

            <div class="exercise"><div class="ex-q">7. When the price of a good or service changes,</div>
            <div class="ex-en">d. there is a movement along a given demand curve.</div>
            <details><summary>Xem Đáp Án</summary><div class="answer"><p><strong>Đáp án: D</strong></p></div></details></div>

            <div class="exercise"><div class="ex-q">8. The law of demand states that, other things equal, an increase in</div>
            <div class="ex-en">b. price causes quantity demanded to decrease.</div>
            <details><summary>Xem Đáp Án</summary><div class="answer"><p><strong>Đáp án: B</strong></p></div></details></div>

            <div class="exercise"><div class="ex-q">9. The demand curve for a good is a line that relates</div>
            <div class="ex-en">a. price and quantity demanded.</div>
            <details><summary>Xem Đáp Án</summary><div class="answer"><p><strong>Đáp án: A</strong></p></div></details></div>

            <div class="exercise"><div class="ex-q">10. When quantity demanded increases at every possible price, the demand curve has</div>
            <div class="ex-en">b. shifted to the right.</div>
            <details><summary>Xem Đáp Án</summary><div class="answer"><p><strong>Đáp án: B</strong> - Tăng ở "mọi mức giá" nghĩa là dịch chuyển toàn bộ đường cầu (Shift).</p></div></details></div>

            <div class="exercise"><div class="ex-q">11. The market demand curve</div>
            <div class="ex-en">a. is the sum of all individual demand curves.</div>
            <details><summary>Xem Đáp Án</summary><div class="answer"><p><strong>Đáp án: A</strong> - Cộng gộp theo chiều ngang.</p></div></details></div>

            <div class="exercise"><div class="ex-q">12. The quantity supplied of a good is the amount that</div>
            <div class="ex-en">d. sellers are willing and able to sell.</div>
            <details><summary>Xem Đáp Án</summary><div class="answer"><p><strong>Đáp án: D</strong></p></div></details></div>

            <div class="exercise"><div class="ex-q">13. Which of the following would cause a movement along the supply curve for cupcakes?</div>
            <div class="ex-en">b. a decrease in the price of cupcakes</div>
            <details><summary>Xem Đáp Án</summary><div class="answer"><p><strong>Đáp án: B</strong> - Movement chỉ xảy ra khi giá món hàng đó thay đổi.</p></div></details></div>

            <div class="exercise"><div class="ex-q">14. Which of these statements best represents the law of supply?</div>
            <div class="ex-en">c. When the price of a good decreases, sellers produce less of the good.</div>
            <details><summary>Xem Đáp Án</summary><div class="answer"><p><strong>Đáp án: C</strong></p></div></details></div>

            <div class="exercise"><div class="ex-q">15. A improvement in production technology will shift the</div>
            <div class="ex-en">a. supply curve to the right.</div>
            <details><summary>Xem Đáp Án</summary><div class="answer"><p><strong>Đáp án: A</strong></p></div></details></div>

            <div class="exercise"><div class="ex-q">16. If car manufacturers begin using new technology, we would not expect</div>
            <div class="ex-en">d. individual car manufacturers to move up and to the right along their supply curves.</div>
            <details><summary>Xem Đáp Án</summary><div class="answer"><p><strong>Đáp án: D</strong> - Vì công nghệ làm SHIFT cung, không làm MOVEMENT.</p></div></details></div>

            <div class="exercise"><div class="ex-q">17. At the equilibrium price, the quantity that buyers are willing to buy</div>
            <div class="ex-en">b. exactly equals the quantity that sellers are willing and able to sell.</div>
            <details><summary>Xem Đáp Án</summary><div class="answer"><p><strong>Đáp án: B</strong></p></div></details></div>

            <div class="exercise"><div class="ex-q">18. Buyers are able to buy all they want and sellers sell all they want at</div>
            <div class="ex-en">d. the equilibrium price but not above or below the equilibrium price.</div>
            <details><summary>Xem Đáp Án</summary><div class="answer"><p><strong>Đáp án: D</strong></p></div></details></div>

            <div class="exercise"><div class="ex-q">19. Which of the following events must cause equilibrium price to rise?</div>
            <div class="ex-en">a. demand increases and supply decreases</div>
            <details><summary>Xem Đáp Án</summary><div class="answer"><p><strong>Đáp án: A</strong></p></div></details></div>

            <div class="exercise"><div class="ex-q">20. Selling for $20, equilibrium price is $30. We would expect a</div>
            <div class="ex-en">a. shortage to exist and the market price of roses to increase.</div>
            <details><summary>Xem Đáp Án</summary><div class="answer"><p><strong>Đáp án: A</strong> - Giá hiện tại thấp hơn giá cân bằng gây thiếu hụt.</p></div></details></div>

            <div class="exercise"><div class="ex-q">21. In general, elasticity is a measure of</div>
            <div class="ex-en">d. how much buyers and sellers respond to changes in market conditions.</div>
            <details><summary>Xem Đáp Án</summary><div class="answer"><p><strong>Đáp án: D</strong></p></div></details></div>

            <div class="exercise"><div class="ex-q">22. Elasticity provides information on the</div>
            <div class="ex-en">b. magnitude of the effect on the market.</div>
            <details><summary>Xem Đáp Án</summary><div class="answer"><p><strong>Đáp án: B</strong> - Thể hiện mức độ/quy mô phản ứng.</p></div></details></div>

            <div class="exercise"><div class="ex-q">23. The price elasticity of demand measures how much</div>
            <div class="ex-en">a. quantity demanded responds to a change in price.</div>
            <details><summary>Xem Đáp Án</summary><div class="answer"><p><strong>Đáp án: A</strong></p></div></details></div>

            <div class="exercise"><div class="ex-q">24. Demand is said to be inelastic if</div>
            <div class="ex-en">c. the quantity demanded changes only slightly when the price of the good changes.</div>
            <details><summary>Xem Đáp Án</summary><div class="answer"><p><strong>Đáp án: C</strong></p></div></details></div>

            <div class="exercise"><div class="ex-q">25. Demand is elastic if the price elasticity of demand is</div>
            <div class="ex-en">d. greater than 1.</div>
            <details><summary>Xem Đáp Án</summary><div class="answer"><p><strong>Đáp án: D</strong></p></div></details></div>

            <div class="exercise"><div class="ex-q">26. Goods with many close substitutes tend to have</div>
            <div class="ex-en">a. more elastic demands.</div>
            <details><summary>Xem Đáp Án</summary><div class="answer"><p><strong>Đáp án: A</strong></p></div></details></div>

            <div class="exercise"><div class="ex-q">27. For a good that is a necessity, demand</div>
            <div class="ex-en">a. tends to be inelastic.</div>
            <details><summary>Xem Đáp Án</summary><div class="answer"><p><strong>Đáp án: A</strong></p></div></details></div>

            <div class="exercise"><div class="ex-q">28. Wheat farmers would realize an increase in total revenue if the</div>
            <div class="ex-en">d. demand for wheat is elastic.</div>
            <details><summary>Xem Đáp Án</summary><div class="answer"><p><strong>Đáp án: D</strong> - Giá giảm mà cầu co giãn mạnh thì lượng mua vọt lên bù đắp dư phần giá.</p></div></details></div>

            <div class="exercise"><div class="ex-q">29. The supply of oil is likely to be</div>
            <div class="ex-en">d. inelastic in the short run and elastic in the long run.</div>
            <details><summary>Xem Đáp Án</summary><div class="answer"><p><strong>Đáp án: D</strong></p></div></details></div>
          </div>
        `
      }
    ]
  }
];
// =========================================================================
// SECTION 2 DATA
// =========================================================================
const section2Data = [
  {
    id: "overview-2",
    chapterNum: "00",
    chapterTitle: "Tổng quan: Theory of Consumer Behavior",
    chapterSub: "Lý thuyết hành vi người tiêu dùng — Khung phân tích 3 bước",
    blocks: [
      {
        type: "concept",
        title: "Consumer Behavior Theory",
        conceptEn: "DEFINITION IN ENGLISH",
        content: `
          <p><strong>Theory of consumer behavior</strong>: Description of how consumers allocate incomes among different goods and services to <strong>maximize their well-being</strong>.</p>
          <p>Lý thuyết hành vi người tiêu dùng mô tả cách người tiêu dùng phân bổ thu nhập giữa các hàng hóa và dịch vụ khác nhau để <strong>tối đa hóa phúc lợi</strong> (sự thỏa mãn) của họ.</p>
        `
      },
      {
        type: "formula",
        title: "3-Step Framework",
        content: `
          Step 1: Consumer Preferences  →  "Tôi thích cái gì?"<br>
          Step 2: Budget Constraints    →  "Tôi có thể mua được gì?"<br>
          Step 3: Consumer Choices      →  "Tôi sẽ chọn gì để tối ưu?"
        `
      },
      {
        type: "keywords",
        title: "🔑 Keywords cần nhớ",
        content: `
          <span class="kw">allocate income</span>
          <span class="kw">maximize well-being</span>
          <span class="kw">preferences</span>
          <span class="kw">budget constraints</span>
          <span class="kw">consumer choices</span>
        `
      },
      {
        type: "trap",
        title: "⚠️ Bẫy thường gặp",
        content: `
          <ul>
            <li><strong>Nhầm thứ tự 3 bước:</strong> Preferences (sở thích) phân tích TRƯỚC budget (ngân sách). Sở thích là chủ quan, ngân sách mới là giới hạn khách quan. Tuy nhiên trong thực tế cả hai tương tác cùng lúc.</li>
            <li><strong>"Maximize utility" ≠ "spend all money":</strong> Tối đa hóa tiện ích không có nghĩa là tiêu hết tiền (dù trong mô hình 1 kỳ thì thường vậy), mà là chọn rổ hàng tốt nhất trong giới hạn ngân sách.</li>
          </ul>
        `
      }
    ]
  },
  {
    id: "budget",
    chapterNum: "01",
    chapterTitle: "Budget Constraints",
    chapterSub: "Ràng buộc ngân sách",
    blocks: [
      {
        type: "raw",
        content: `
        <div class="concept" id="budget-line">
          <div class="concept-title">Budget Constraints &amp; The Budget Line</div>
          <div class="concept-en">RÀNG BUỘC NGÂN SÁCH VÀ ĐƯỜNG NGÂN SÁCH</div>

          <svg class="svg-chart" viewBox="0 0 350 220" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
            <line x1="40" y1="180" x2="320" y2="180" stroke="#7f8c8d" stroke-width="2"/>
            <line x1="40" y1="20" x2="40" y2="180" stroke="#7f8c8d" stroke-width="2"/>
            <text x="310" y="195" class="axis-label">Food (F)</text>
            <text x="5" y="15" class="axis-label">Clothes (C)</text>
            <line x1="40" y1="50" x2="220" y2="180" stroke="#1a1a2e" stroke-width="3"/>
            <text x="225" y="175" font-weight="bold" fill="#1a1a2e">L₁</text>
            <line x1="90" y1="50" x2="270" y2="180" stroke="#1a7a4a" stroke-width="2" stroke-dasharray="5"/>
            <text x="275" y="175" font-weight="bold" fill="#1a7a4a">L₂ (I tăng)</text>
            <line x1="40" y1="50" x2="300" y2="180" stroke="#c0392b" stroke-width="2" stroke-dasharray="5"/>
            <text x="305" y="175" font-weight="bold" fill="#c0392b">L₃ (PF giảm)</text>
            <circle cx="40" cy="50" r="4" fill="#1a1a2e"/>
          </svg>

          <div class="concept-body">
            <p><strong>Budget Constraints:</strong> Constraints that consumers face as a result of <strong>limited incomes</strong>.</p>
            <p>Ràng buộc ngân sách là giới hạn mà người tiêu dùng phải đối mặt vì thu nhập có hạn. Đây là thực tế hiển nhiên: bạn không thể mua mọi thứ bạn muốn vì túi tiền có giới hạn.</p>
            <p><strong>The Budget Line:</strong> All combinations of goods for which the <strong>total amount of money spent equals income</strong>.</p>
            <p>Đường ngân sách (budget line) là tập hợp tất cả các rổ hàng hóa mà người tiêu dùng có thể mua khi <strong>tiêu hết toàn bộ thu nhập</strong>. Đây là đường thẳng dốc xuống trên đồ thị.</p>
          </div>

          <div class="formula">
            <div class="label">Budget Line Equation</div>
            \\[ P_F \\cdot F + P_C \\cdot C = I \\]<br>
            Ví dụ cụ thể từ slide:<br>
            \\( \\$1 \\cdot F + \\$2 \\cdot C = \\$80 \\)<br>
            \\( \\rightarrow F + 2C = 80 \\)<br><br>
            Intercepts (điểm chặn trục):<br>
            F-axis: \\( F = I/P_F = 80/1 = 80 \\) (nếu chỉ mua Food)<br>
            C-axis: \\( C = I/P_C = 80/2 = 40 \\) (nếu chỉ mua Clothing)
          </div>

          <table>
            <tr><th>Market Basket</th><th>Food (F)</th><th>Clothing (C)</th><th>Total Spending</th></tr>
            <tr><td>A</td><td>0</td><td>40</td><td>$80 ✓</td></tr>
            <tr><td>B</td><td>20</td><td>30</td><td>$80 ✓</td></tr>
            <tr><td>D</td><td>40</td><td>20</td><td>$80 ✓</td></tr>
            <tr><td>E</td><td>60</td><td>10</td><td>$80 ✓</td></tr>
            <tr><td>G</td><td>80</td><td>0</td><td>$80 ✓</td></tr>
          </table>

          <div class="formula">
            <div class="label">Slope of Budget Line</div>
            \\[ \\text{Slope} = -\\frac{P_F}{P_C} = -\\frac{1}{2} \\]<br>
            Ý nghĩa kinh tế: Để mua thêm 1 đơn vị Food, phải từ bỏ 1/2 đơn vị Clothing.<br>
            → Đây chính là "chi phí cơ hội" (opportunity cost) của Food tính bằng Clothing.
          </div>

          <div class="keywords">
            <div class="keywords-title">🔑 Keywords</div>
            <div class="kw-list">
              <span class="kw">P_F · F + P_C · C = I</span>
              <span class="kw">slope = −P_F/P_C</span>
              <span class="kw">intercept = I/P</span>
              <span class="kw">opportunity cost</span>
              <span class="kw">market basket</span>
            </div>
          </div>

          <div class="trap">
            <div class="trap-title">⚠️ Bẫy &amp; Nhầm lẫn thường gặp</div>
            <ul>
              <li><strong>Slope âm ≠ "xấu":</strong> Dốc âm phản ánh đánh đổi (trade-off) — để có thêm thứ này phải bỏ bớt thứ kia. Đây là quy luật kinh tế tự nhiên.</li>
              <li><strong>Điểm DƯỚI đường ngân sách:</strong> Là "có thể mua được" nhưng chưa tiêu hết tiền. Trong mô hình tĩnh 1 kỳ, không tối ưu vì còn tiền dư. Điểm TRÊN đường ngân sách là "không thể mua được" (unattainable).</li>
              <li><strong>Slope của budget line ≠ MRS:</strong> Slope của budget line = tỷ lệ giá (\\( P_F/P_C \\)), còn MRS là độ dốc của đường bàng quan (indifference curve) — hai khái niệm KHÁC NHAU, chỉ bằng nhau tại điểm tối ưu.</li>
              <li><strong>Nhớ dấu âm:</strong> Slope = \\( -P_F/P_C \\) (không phải dương). Vì tăng F thì phải giảm C.</li>
            </ul>
          </div>

          <div class="exercise">
            <div class="exercise-title">✏️ Bài tập 1 — Budget Line</div>
            <div class="ex-q">Thu nhập \\( I = \\$120 \\). Giá Pizza \\( P_P = \\$3 \\)/cái, giá Soda \\( P_S = \\$2 \\)/lon. Hãy: (a) Viết phương trình đường ngân sách. (b) Tìm các điểm chặn trục. (c) Tính slope và giải thích ý nghĩa kinh tế.</div>
            <div class="ex-en">Income I = $120. Price of Pizza P_P = $3, Price of Soda P_S = $2. (a) Write the budget line equation. (b) Find the intercepts. (c) Calculate slope and explain economic meaning.</div>
            <details>
              <summary>Xem đáp án & giải thích</summary>
              <div class="answer">
                <div class="answer-title">Đáp án</div>
                <p><strong>(a) Phương trình:</strong> \\( 3P + 2S = 120 \\)</p>
                <p><strong>(b) Điểm chặn:</strong></p>
                <p>• Trục Pizza (S=0): \\( P = 120/3 = \\) <span class="hl-red">40 cái Pizza</span> (nếu chỉ mua Pizza)</p>
                <p>• Trục Soda (P=0): \\( S = 120/2 = \\) <span class="hl-blue">60 lon Soda</span> (nếu chỉ mua Soda)</p>
                <p><strong>(c) Slope:</strong> \\( = -P_P/P_S = -3/2 = \\) <span class="hl-red">-1.5</span></p>
                <p><strong>Ý nghĩa kinh tế:</strong> Để mua thêm 1 cái Pizza, người tiêu dùng phải từ bỏ 1.5 lon Soda. Hay nói cách khác, chi phí cơ hội của 1 Pizza = 1.5 Soda. Đây phản ánh tỷ lệ giá trên thị trường — Pizza đắt hơn Soda 1.5 lần.</p>
              </div>
            </details>
          </div>
        </div>
        `
      },
      {
        type: "raw",
        content: `
        <div class="concept" id="income-change">
          <div class="concept-title">Effects of Income Changes on Budget Line</div>
          <div class="concept-en">TÁC ĐỘNG CỦA THAY ĐỔI THU NHẬP ĐẾN ĐƯỜNG NGÂN SÁCH</div>
          <div class="concept-body">
            <p>A change in income (with prices unchanged) causes the budget line to <strong>shift parallel</strong> to the original line.</p>
            <p>Khi thu nhập thay đổi (giá cả không đổi), đường ngân sách <strong>dịch chuyển song song</strong>:</p>
            <ul>
              <li><strong>Thu nhập tăng</strong> → đường ngân sách dịch ra ngoài (outward shift) → người tiêu dùng có thể mua nhiều hơn</li>
              <li><strong>Thu nhập giảm</strong> → đường ngân sách dịch vào trong (inward shift) → sức mua giảm</li>
            </ul>
            <p>Từ slide: I=$80 (L1) → I=$160 (L2, dịch ra) → I=$40 (L3, dịch vào)</p>
          </div>

          <div class="formula">
            <div class="label">Tại sao song song?</div>
            Slope = \\( -P_F/P_C \\) → Giá không đổi, nên slope không đổi<br>
            Chỉ có intercepts thay đổi: \\( I/P_F \\) và \\( I/P_C \\) đều tăng/giảm cùng tỷ lệ<br>
            → Đường mới song song với đường cũ ✓
          </div>

          <div class="keywords">
            <div class="keywords-title">🔑 Keywords</div>
            <div class="kw-list">
              <span class="kw">parallel shift</span>
              <span class="kw">income increase → outward</span>
              <span class="kw">income decrease → inward</span>
              <span class="kw">slope unchanged</span>
            </div>
          </div>

          <div class="trap">
            <div class="trap-title">⚠️ Bẫy</div>
            <ul>
              <li><strong>Income thay đổi → PARALLEL shift (song song), không xoay.</strong> Ngược lại, giá thay đổi → ROTATE (xoay). Đây là câu hỏi trắc nghiệm rất hay bẫy!</li>
              <li><strong>Proportional price change = income change:</strong> Nếu cả \\( P_F \\) và \\( P_C \\) đều tăng/giảm cùng tỷ lệ, tác động giống hệt thay đổi thu nhập theo chiều ngược lại — đường ngân sách dịch song song.</li>
            </ul>
          </div>
        </div>
        `
      },
      {
        type: "raw",
        content: `
        <div class="concept" id="price-change">
          <div class="concept-title">Effects of Price Changes on Budget Line</div>
          <div class="concept-en">TÁC ĐỘNG CỦA THAY ĐỔI GIÁ ĐẾN ĐƯỜNG NGÂN SÁCH</div>
          <div class="concept-body">
            <p>A change in the price of one good (with income unchanged) causes the budget line to <strong>rotate</strong> about one intercept.</p>
            <p>Khi giá của một hàng hóa thay đổi (thu nhập không đổi), đường ngân sách <strong>xoay quanh một điểm chặn trục</strong>:</p>
            <ul>
              <li><strong>Giá Food giảm (P_F ↓):</strong> Intercept trên trục F = \\( I/P_F \\) tăng → đường xoay ra ngoài quanh intercept trục C</li>
              <li><strong>Giá Food tăng (P_F ↑):</strong> Intercept trên trục F = \\( I/P_F \\) giảm → đường xoay vào trong quanh intercept trục C</li>
            </ul>
            <p>Từ slide: \\( P_F \\) = $1 (L1), \\( P_F \\) giảm = $0.50 (L2 xoay ra), \\( P_F \\) tăng = $2 (L3 xoay vào)</p>
          </div>

          <div class="formula">
            <div class="label">Tại sao xoay (ROTATE)?</div>
            Intercept trục C = \\( I/P_C \\) → KHÔNG thay đổi (vì \\( P_C \\), I không đổi)<br>
            Intercept trục F = \\( I/P_F \\) → THAY ĐỔI (vì \\( P_F \\) thay đổi)<br>
            Slope = \\( -P_F/P_C \\) → THAY ĐỔI<br>
            → Một đầu cố định, một đầu di chuyển → XoAY (rotate) ✓
          </div>

          <div class="keywords">
            <div class="keywords-title">🔑 Keywords</div>
            <div class="kw-list">
              <span class="kw">rotate about one intercept</span>
              <span class="kw">price decrease → rotate outward</span>
              <span class="kw">price increase → rotate inward</span>
              <span class="kw">slope changes</span>
              <span class="kw">one intercept fixed</span>
            </div>
          </div>

          <div class="exercise">
            <div class="exercise-title">✏️ Bài tập 2 — Income vs Price Change</div>
            <div class="ex-q">I = $60, P_X = $2, P_Y = $3. Xét hai tình huống: (A) Thu nhập tăng lên $90. (B) Giá X giảm xuống $1. Mô tả sự thay đổi đường ngân sách trong mỗi tình huống và cho biết sự khác biệt.</div>
            <details>
              <summary>Xem đáp án & giải thích</summary>
              <div class="answer">
                <div class="answer-title">Đáp án</div>
                <p><strong>Đường ngân sách ban đầu:</strong> \\( 2X + 3Y = 60 \\)</p>
                <p>• Intercept X: X = 30 &nbsp;|&nbsp; Intercept Y: Y = 20 &nbsp;|&nbsp; Slope = \\( -2/3 \\)</p>
                <p><strong>(A) Thu nhập tăng I = $90:</strong></p>
                <p>Đường mới: \\( 2X + 3Y = 90 \\)</p>
                <p>• Intercept X = 45, Intercept Y = 30, Slope vẫn = \\( -2/3 \\)</p>
                <p>→ <span class="hl-green">Đường dịch SONG SONG ra ngoài</span> (parallel shift outward)</p>
                <p><strong>(B) Giá X giảm P_X = $1:</strong></p>
                <p>Đường mới: \\( 1X + 3Y = 60 \\)</p>
                <p>• Intercept X = 60 (tăng từ 30 lên 60)</p>
                <p>• Intercept Y = 20 (không đổi!)</p>
                <p>• Slope mới = \\( -1/3 \\) (thoải hơn)</p>
                <p>→ <span class="hl-red">Đường XOAY ra ngoài quanh intercept Y = 20</span> (rotate outward about Y-intercept)</p>
              </div>
            </details>
          </div>
        </div>
        `
      }
    ]
  },
  {
    id: "preferences",
    chapterNum: "02",
    chapterTitle: "Consumer Preferences",
    chapterSub: "Sở thích người tiêu dùng",
    blocks: [
      {
        type: "raw",
        content: `
        <div class="concept" id="axioms">
          <div class="concept-title">Three Basic Assumptions (Axioms) of Preferences</div>
          <div class="concept-en">BA TIÊN ĐỀ CƠ BẢN CỦA SỞ THÍCH</div>
          <div class="concept-body">
            <p>Để xây dựng lý thuyết sở thích, kinh tế học giả định người tiêu dùng có sở thích thỏa mãn 3 tiên đề (axioms):</p>
          </div>

          <div style="background:var(--card-bg);border:1.5px solid var(--border);border-radius:8px;overflow:hidden;margin:16px 0;">
            <div style="padding:16px 20px;border-bottom:1px solid var(--border);">
              <h4 style="font-family:'Playfair Display',serif;color:var(--accent);margin-bottom:8px;">① Completeness (Tính đầy đủ)</h4>
              <p style="font-size:15px;"><strong>EN:</strong> For any two market baskets A and B, a consumer will: prefer A to B, OR prefer B to A, OR be indifferent between the two.</p>
              <p style="font-size:15px;margin-top:8px;"><strong>VI:</strong> Người tiêu dùng luôn có thể so sánh và xếp hạng MỌI cặp rổ hàng. Không có trường hợp "không biết chọn cái nào" trong mô hình này. Với bất kỳ A và B: hoặc A ≻ B, hoặc B ≻ A, hoặc A ~ B (bàng quan).</p>
            </div>
            <div style="padding:16px 20px;border-bottom:1px solid var(--border);">
              <h4 style="font-family:'Playfair Display',serif;color:var(--accent);margin-bottom:8px;">② Transitivity (Tính bắc cầu)</h4>
              <p style="font-size:15px;"><strong>EN:</strong> If a consumer prefers A to B and B to C, then the consumer also prefers A to C.</p>
              <p style="font-size:15px;margin-top:8px;"><strong>VI:</strong> Nếu A ≻ B và B ≻ C thì A ≻ C. Đây là tính nhất quán trong sở thích — không có vòng lặp mâu thuẫn. Ví dụ: nếu thích Sushi hơn Phở, thích Phở hơn Cơm, thì phải thích Sushi hơn Cơm.</p>
            </div>
            <div style="padding:16px 20px;">
              <h4 style="font-family:'Playfair Display',serif;color:var(--accent);margin-bottom:8px;">③ More is Better (Không bão hòa / Tính phi bão hòa)</h4>
              <p style="font-size:15px;"><strong>EN:</strong> Goods are desirable. Consumers always prefer more of any good to less. Consumers are never satiated.</p>
              <p style="font-size:15px;margin-top:8px;"><strong>VI:</strong> Hàng hóa luôn là "tốt" (goods, không phải "bads"). Nhiều hơn luôn tốt hơn, dù chỉ tốt hơn một chút. Đây gọi là giả định "non-satiation".</p>
            </div>
          </div>

          <div class="keywords">
            <div class="keywords-title">🔑 Keywords</div>
            <div class="kw-list">
              <span class="kw">Completeness</span>
              <span class="kw">Transitivity</span>
              <span class="kw">Non-satiation</span>
              <span class="kw">A ≻ B (A preferred to B)</span>
              <span class="kw">A ~ B (indifferent)</span>
              <span class="kw">rational consumer</span>
            </div>
          </div>

          <div class="trap">
            <div class="trap-title">⚠️ Bẫy về 3 Axioms</div>
            <ul>
              <li><strong>Completeness không có nghĩa là "thích tất cả mọi thứ như nhau":</strong> Chỉ có nghĩa là có thể so sánh và ra quyết định.</li>
              <li><strong>Transitivity là điều kiện đủ cho sự nhất quán nhưng không phải điều kiện cần trong thực tế:</strong> Trong thực nghiệm con người đôi khi vi phạm transitivity — nhưng trong lý thuyết chuẩn tắc, đây là giả định nền tảng.</li>
            </ul>
          </div>

          <div class="exercise">
            <div class="exercise-title">✏️ Bài tập 3 — Kiểm tra Axioms</div>
            <div class="ex-q">Cho biết sở thích của Nam: Bún bò ≻ Phở, Phở ~ Mì Quảng, Cơm ≻ Bún bò. Hỏi: (a) Sở thích có thỏa mãn Transitivity không? (b) Xếp hạng toàn bộ 4 món theo sở thích của Nam.</div>
            <details>
              <summary>Xem đáp án</summary>
              <div class="answer">
                <div class="answer-title">Đáp án</div>
                <p><strong>(a) Kiểm tra Transitivity:</strong></p>
                <p>• Bún bò ≻ Phở và Phở ~ Mì Quảng → Bún bò ≻ Mì Quảng ✓</p>
                <p>• Cơm ≻ Bún bò và Bún bò ≻ Phở → Cơm ≻ Phở ✓</p>
                <p>→ <span class="hl-green">Có, thỏa mãn Transitivity.</span></p>
                <p><strong>(b) Xếp hạng:</strong> Cơm ≻ Bún bò ≻ Phở ~ Mì Quảng</p>
              </div>
            </details>
          </div>
        </div>
        `
      },
      {
        type: "raw",
        content: `
        <div class="concept" id="ic">
          <div class="concept-title">Indifference Curves &amp; Indifference Maps</div>
          <div class="concept-en">ĐƯỜNG BÀNG QUAN VÀ BẢN ĐỒ BÀNG QUAN</div>
          
          <svg class="svg-chart" viewBox="0 0 300 220" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
            <line x1="30" y1="180" x2="280" y2="180" stroke="#7f8c8d" stroke-width="2"/>
            <line x1="30" y1="20" x2="30" y2="180" stroke="#7f8c8d" stroke-width="2"/>
            <line x1="30" y1="40" x2="240" y2="180" stroke="#1a1a2e" stroke-width="2"/>
            <path d="M 40 80 Q 70 140 160 160" fill="none" stroke="#2471a3" stroke-width="2" stroke-dasharray="3"/>
            <text x="165" y="170" fill="#2471a3">U₁</text>
            <path d="M 70 60 Q 115 130 230 145" fill="none" stroke="#c0392b" stroke-width="3"/>
            <text x="235" y="150" fill="#c0392b" font-weight="bold">U₂ (Optimum)</text>
            <path d="M 100 40 Q 160 100 260 120" fill="none" stroke="#2471a3" stroke-width="2" stroke-dasharray="3"/>
            <text x="265" y="125" fill="#2471a3">U₃</text>
            <circle cx="135" cy="110" r="5" fill="#1a1a2e"/>
            <text x="145" y="105" font-weight="bold">A (Tối ưu)</text>
          </svg>

          <div class="concept-body">
            <p><strong>Indifference Curve:</strong> Curve representing all combinations of market baskets that provide a consumer with the <strong>same level of satisfaction</strong>.</p>
            <p>Đường bàng quan là tập hợp tất cả các rổ hàng mang lại <strong>cùng mức độ thỏa mãn</strong> cho người tiêu dùng.</p>
            <p><strong>Indifference Map:</strong> A set of indifference curves showing all market baskets among which a consumer is indifferent — each curve representing a different utility level.</p>
            <p>Bản đồ bàng quan là TẬP HỢP các đường bàng quan. Đường càng xa gốc tọa độ → mức thỏa mãn càng cao: U3 &gt; U2 &gt; U1.</p>
          </div>

          <div style="background:var(--card-bg);border:1.5px solid var(--border);border-radius:8px;padding:16px 20px;margin:16px 0;">
            <h4 style="font-family:'Playfair Display',serif;margin-bottom:12px;">4 Tính chất của Indifference Curves</h4>
            <p style="margin-bottom:8px;font-size:15px;"><strong>① Dốc xuống (Downward sloping):</strong> Do axiom "more is better" — để duy trì cùng mức utility, giảm X thì phải tăng Y.</p>
            <p style="margin-bottom:8px;font-size:15px;"><strong>② Các đường bàng quan KHÔNG cắt nhau (Cannot intersect):</strong> Nếu cắt nhau → mâu thuẫn logic (vi phạm transitivity).</p>
            <p style="margin-bottom:8px;font-size:15px;"><strong>③ Lồi về phía gốc tọa độ (Convex to origin):</strong> Phản ánh MRS giảm dần — càng có nhiều X, càng sẵn sàng từ bỏ ít Y hơn để có thêm X.</p>
            <p style="font-size:15px;"><strong>④ Đường càng xa gốc tọa độ → utility càng cao</strong> (do non-satiation axiom).</p>
          </div>

          <div class="formula">
            <div class="label">Tại sao IC không được cắt nhau? (Proof by contradiction)</div>
            Giả sử U1 và U2 cắt nhau tại điểm A.<br>
            Gọi B ∈ U1, D ∈ U2, và B có nhiều cả X lẫn Y hơn D.<br>
            • A ∈ U1 và B ∈ U1 → A ~ B<br>
            • A ∈ U2 và D ∈ U2 → A ~ D<br>
            • Transitivity: A ~ B và A ~ D → B ~ D<br>
            • Nhưng B có nhiều hơn D → B ≻ D (more is better) → MÂU THUẪN! ✗<br>
            → IC không thể cắt nhau
          </div>
        </div>
        `
      },
      {
        type: "raw",
        content: `
        <div class="concept" id="mrs">
          <div class="concept-title">Marginal Rate of Substitution (MRS)</div>
          <div class="concept-en">TỶ LỆ THAY THẾ BIÊN</div>
          <div class="concept-body">
            <p><strong>MRS:</strong> The maximum amount of one good that a consumer is willing to give up in order to obtain one additional unit of another good, <strong>while maintaining the same utility level</strong>.</p>
            <p>MRS là lượng tối đa của hàng hóa Y mà người tiêu dùng sẵn sàng từ bỏ để có thêm 1 đơn vị hàng hóa X, <strong>trong khi giữ nguyên mức thỏa mãn</strong>. MRS chính là độ dốc tuyệt đối (absolute value of slope) của đường bàng quan tại một điểm.</p>
          </div>

          <div class="formula">
            <div class="label">MRS Formula &amp; Relationship to Marginal Utility</div>
            \\[ \\text{MRS}_{XY} = -\\frac{\\Delta Y}{\\Delta X} = |\\text{slope of IC}| \\]<br>
            Liên hệ với Marginal Utility:<br>
            \\[ \\text{MRS}_{XY} = \\frac{MU_X}{MU_Y} \\]<br>
            Tại sao? Dọc theo IC, tổng thay đổi utility = 0:<br>
            \\( MU_X \\cdot \\Delta X + MU_Y \\cdot \\Delta Y = 0 \\)<br>
            → \\( -\\frac{\\Delta Y}{\\Delta X} = \\frac{MU_X}{MU_Y} = \\text{MRS}_{XY} \\) ✓
          </div>

          <div class="concept-body">
            <p><strong>Diminishing MRS (MRS giảm dần):</strong> As we move down along an IC, the MRS falls. This means the consumer is willing to give up less and less Y for each additional unit of X.</p>
          </div>

          <div class="exercise">
            <div class="exercise-title">✏️ Bài tập 5 — Tính MRS</div>
            <div class="ex-q">Cho hàm utility \\( U = X \\cdot Y \\) (Cobb-Douglas). Tại giỏ hàng \\( A = (4, 6) \\): (a) Tính \\( MU_X \\) và \\( MU_Y \\). (b) Tính \\( \\text{MRS}_{XY} \\).</div>
            <details>
              <summary>Xem đáp án</summary>
              <div class="answer">
                <p>\\( MU_X = \\frac{\\partial U}{\\partial X} = Y = 6 \\)</p>
                <p>\\( MU_Y = \\frac{\\partial U}{\\partial Y} = X = 4 \\)</p>
                <p>\\( \\text{MRS}_{XY} = \\frac{MU_X}{MU_Y} = \\frac{6}{4} = \\) <span class="hl-red">1.5</span></p>
              </div>
            </details>
          </div>
        </div>
        `
      },
      {
        type: "raw",
        content: `
        <div class="concept" id="types">
          <div class="concept-title">Perfect Substitutes &amp; Perfect Complements</div>
          <div class="concept-en">THẾ PHẨM HOÀN HẢO VÀ HÀNG BỔ SUNG HOÀN HẢO</div>

          <div class="compare">
            <div class="compare-card">
              <h4>Perfect Substitutes (Thế phẩm hoàn hảo)</h4>
              <p><strong>Định nghĩa:</strong> Two goods for which the MRS is <em>constant</em> — the consumer is always willing to trade them at a fixed ratio.</p>
              <p style="margin-top:8px;"><strong>Đặc điểm IC:</strong> Đường thẳng (straight lines), dốc âm hằng số.</p>
            </div>
            <div class="compare-card">
              <h4>Perfect Complements (Hàng bổ sung hoàn hảo)</h4>
              <p><strong>Định nghĩa:</strong> Two goods for which the MRS is 0 or infinite — they must be consumed together in fixed proportions.</p>
              <p style="margin-top:8px;"><strong>Đặc điểm IC:</strong> Hình chữ L (right angles / L-shaped).</p>
            </div>
          </div>
        </div>
        `
      }
    ]
  },
  {
    id: "utility",
    chapterNum: "03",
    chapterTitle: "Utility &amp; Marginal Utility",
    chapterSub: "Hàm tiện ích và tiện ích biên",
    blocks: [
      {
        type: "raw",
        content: `
        <div class="concept">
          <div class="concept-title">Utility &amp; Utility Functions</div>
          <div class="concept-en">TIỆN ÍCH VÀ HÀM TIỆN ÍCH</div>
          <div class="concept-body">
            <p><strong>Utility:</strong> Numerical score representing the satisfaction that a consumer gets from a given market basket.</p>
            <p><strong>Utility Function:</strong> Formula that assigns a level of utility to individual market baskets. Quan trọng: chỉ cần thứ hạng (ordinal), không cần giá trị tuyệt đối (cardinal).</p>
          </div>
        </div>
        `
      },
      {
        type: "raw",
        content: `
        <div class="concept" id="mu">
          <div class="concept-title">Marginal Utility (MU) &amp; Diminishing MU</div>
          <div class="concept-en">TIỆN ÍCH BIÊN VÀ QUY LUẬT TIỆN ÍCH BIÊN GIẢM DẦN</div>
          <div class="concept-body">
            <p><strong>Marginal Utility:</strong> Additional satisfaction obtained from consuming <strong>one additional unit</strong> of a good.</p>
            <p><strong>Diminishing Marginal Utility:</strong> As more of a good is consumed, the consumption of additional amounts will yield <strong>smaller and smaller additions to utility</strong>.</p>
          </div>

          <div class="formula">
            <div class="label">Marginal Utility Formula</div>
            \\[ MU_X = \\frac{\\Delta U}{\\Delta X} = \\frac{\\partial U}{\\partial X} \\]
          </div>

          <div class="exercise">
            <div class="exercise-title">✏️ Bài tập 7 — Tổng hợp: MU, MRS, Budget Line</div>
            <div class="ex-q">Lan có thu nhập I = $100. Giá sách \\( P_B = \\$10 \\), giá cà phê \\( P_C = \\$5 \\). Hàm utility \\( U = B \\cdot C \\). Tại giỏ hàng hiện tại: B = 5, C = 10. Lan có đang tối ưu không?</div>
            <details>
              <summary>Xem đáp án & giải thích</summary>
              <div class="answer">
                <p>\\( MU_B = C = 10 \\), \\( MU_C = B = 5 \\) → \\( \\text{MRS}_{BC} = 10/5 = 2 \\)</p>
                <p>Tỷ lệ giá: \\( P_B/P_C = 10/5 = 2 \\)</p>
                <p>Vì \\( \\text{MRS}_{BC} = P_B/P_C = 2 \\) và tiêu hết tiền \\( (10\\times5 + 5\\times10 = 100) \\) → <strong>Lan ĐANG TỐI ƯU!</strong></p>
              </div>
            </details>
          </div>
        </div>
        `
      },
      {
        type: "raw",
        content: `
        <table>
          <tr><th>Khái niệm</th><th>Tiếng Anh</th><th>Công thức / Đặc điểm</th><th>Bẫy chính</th></tr>
          <tr><td><strong>Đường ngân sách</strong></td><td>Budget Line</td><td>\\( P_X \\cdot X + P_Y \\cdot Y = I \\); Slope = \\( -P_X/P_Y \\)</td><td>Slope âm là đặc trưng</td></tr>
          <tr><td><strong>Thu nhập thay đổi</strong></td><td>Income Change</td><td>Dịch SONG SONG (parallel shift)</td><td>Không xoay!</td></tr>
          <tr><td><strong>Giá thay đổi</strong></td><td>Price Change</td><td>XOAY quanh một intercept (rotate)</td><td>Intercept kia CỐ ĐỊNH</td></tr>
        </table>
        `
      }
    ]
  }
];

// =========================================================================
// SECTION 3 DATA
// =========================================================================
const section3Data = [
  {
    id: "optimum",
    chapterNum: "01",
    chapterTitle: "Consumer Optimum — Lựa chọn tối ưu người tiêu dùng",
    chapterSub: "General Optimisation Problem · Interior & Corner Solutions",
    blocks: [
      {
        type: "raw",
        content: `
        <div class="concept" id="interior">
          <div class="concept-title">General Optimisation Problem (Interior Solution)</div>
          <div class="concept-en">BÀI TOÁN TỐI ƯU HÓA TỔNG QUÁT — NGHIỆM NỘI</div>
          <div class="concept-body">
            <p>Mục tiêu của người tiêu dùng hợp lý là <strong>tối đa hóa utility</strong> trong khuôn khổ ràng buộc ngân sách.</p>
            <p>① It must be located on the budget line (tiêu hết thu nhập).</p>
            <p>② It must give the consumer the most preferred combination.</p>
          </div>

          <div class="formula">
            <div class="label">Formal Optimisation Problem</div>
            Maximize:  \\( U(x, y) \\)<br>
            Subject to: \\( P_x \\cdot x + P_y \\cdot y = I \\)<br><br>
            Nghiệm nội (Interior Solution):<br>
            \\[ MRS_{xy} = \\frac{P_x}{P_y} \\]<br>
            Tương đương: \\( \\frac{MU_x}{P_x} = \\frac{MU_y}{P_y} \\)
          </div>

          <div class="exercise">
            <div class="exercise-title">✏️ Bài tập 1 — Tìm Consumer Optimum (Interior Solution)</div>
            <div class="ex-q">Minh có thu nhập \\( I = \\$120 \\). Giá gạo \\( P_R = \\$2 \\), giá cá \\( P_F = \\$4 \\). Hàm utility \\( U(R, F) = R \\cdot F \\). Tìm rổ hàng tối ưu.</div>
            <details>
              <summary>Xem đáp án chi tiết</summary>
              <div class="answer">
                <p>\\( MRS = F/R = P_R/P_F = 2/4 = 1/2 \\implies R = 2F \\)</p>
                <p>Thay vào ngân sách: \\( 2(2F) + 4F = 120 \\implies 8F = 120 \\implies \\boxed{F^* = 15, R^* = 30} \\)</p>
              </div>
            </details>
          </div>
        </div>
        `
      },
      {
        type: "raw",
        content: `
        <div class="concept" id="corner">
          <div class="concept-title">Corner Solution — Nghiệm góc</div>
          <div class="concept-en">KHI NGƯỜI TIÊU DÙNG CHỈ MUA MỘT LOẠI HÀNG HÓA</div>
          <div class="concept-body">
            <p>Nghiệm góc xảy ra khi điểm tối ưu nằm ở góc của đường ngân sách, nghĩa là người tiêu dùng tiêu thụ hoàn toàn chỉ một trong hai hàng hóa (lượng hàng kia bằng 0).</p>
          </div>
          <div class="exercise">
            <div class="exercise-title">✏️ Bài tập 3 — Corner Solution với Perfect Substitutes</div>
            <div class="ex-q">An xem Pepsi và Coca-Cola là thế phẩm hoàn hảo tỷ lệ 1:1 (MRS=1). Ngân sách $30. P_Pepsi = $1.50, P_Coca = $1.00. An chọn gì?</div>
            <details>
              <summary>Xem đáp án</summary>
              <div class="answer">
                <p>An chọn toàn bộ Coca-Cola vì giá Coca rẻ hơn và mang lại độ thỏa mãn tương đương Pepsi.</p>
                <p>\\( \\boxed{Coca = 30, Pepsi = 0} \\)</p>
              </div>
            </details>
          </div>
        </div>
        `
      }
    ]
  },
  {
    id: "manager",
    chapterNum: "02",
    chapterTitle: "How Managers Strategically Influence Consumer Choices",
    chapterSub: "Chiến lược kinh doanh tác động đến lựa chọn người tiêu dùng",
    blocks: [
      {
        type: "raw",
        content: `
        <div class="concept">
          <div class="concept-title">Influencing Budget Constraints &amp; Preferences</div>
          <div class="concept-en">TÁC ĐỘNG ĐẾN NGÂN SÁCH VÀ SỞ THÍCH</div>
          <div class="compare">
            <div class="compare-card">
              <h4>① Tác động đến Sở thích (Preferences)</h4>
              <p>Quảng cáo, branding, review... dịch chuyển đường bàng quan (IC) ra xa gốc tọa độ hơn đối với sản phẩm mục tiêu.</p>
            </div>
            <div class="compare-card">
              <h4>② Tác động đến Ngân sách (Budget Line)</h4>
              <p>Giảm giá, tặng coupon, tạo combo... làm bẻ cong (kink) hoặc xoay đường ngân sách theo hướng có lợi cho sức mua sản phẩm.</p>
            </div>
          </div>
        </div>
        `
      }
    ]
  },
  {
    id: "income-demand",
    chapterNum: "03",
    chapterTitle: "Income Changes &amp; Demand",
    chapterSub: "Thay đổi thu nhập và cầu · Income-Consumption Curve · Engel Curve",
    blocks: [
      {
        type: "raw",
        content: `
        <div class="concept">
          <div class="concept-title">Income-Consumption Curve (ICC)</div>
          <div class="concept-en">ĐƯỜNG THU NHẬP-TIÊU DÙNG</div>
          <p><strong>Income-Consumption Curve:</strong> Curve tracing the utility-maximizing combinations of two goods as a consumer's income changes (with prices held constant).</p>
        </div>
        <div class="concept" id="normal-inferior">
          <div class="concept-title">Normal Goods vs Inferior Goods</div>
          <div class="compare">
            <div class="compare-card">
              <h4>Normal Good (Hàng thông thường)</h4>
              <p>Thu nhập tăng → Cầu tăng (Thịt bò cao cấp, du lịch...)</p>
            </div>
            <div class="compare-card">
              <h4>Inferior Good (Hàng cấp thấp)</h4>
              <p>Thu nhập tăng → Cầu GIẢM (Mì gói, xe buýt công cộng...)</p>
            </div>
          </div>
        </div>
        `
      },
      {
        type: "raw",
        content: `
        <div class="concept" id="engel">
          <div class="concept-title">Engel Curves</div>
          <p>Đường Engel biểu diễn mối quan hệ giữa thu nhập (trục hoành) và lượng tiêu dùng của một hàng hóa cụ thể (trục tung).</p>
        </div>
        `
      }
    ]
  },
  {
    id: "price-demand",
    chapterNum: "04",
    chapterTitle: "Price Changes &amp; Demand",
    chapterSub: "Thay đổi giá và cầu · Price-Consumption Curve · Demand Curve",
    blocks: [
      {
        type: "raw",
        content: `
        <div class="concept">
          <div class="concept-title">Price-Consumption Curve (PCC)</div>
          <p><strong>Price-Consumption Curve:</strong> Quỹ tích của tất cả các điểm tối ưu khi giá của MỘT hàng hóa thay đổi trong khi giữ nguyên thu nhập và giá hàng hóa còn lại.</p>
          <p>Từ đường PCC, chúng ta trích xuất các cặp giá trị (Giá, Lượng) để vẽ nên đường cầu cá nhân (Demand Curve).</p>
        </div>
        `
      }
    ]
  },
  {
    id: "sub-income",
    chapterNum: "05",
    chapterTitle: "Income &amp; Substitution Effects",
    chapterSub: "Hiệu ứng thay thế và hiệu ứng thu nhập — Phân tích Slutsky/Hicks",
    blocks: [
      {
        type: "raw",
        content: `
        <div class="concept">
          <div class="concept-title">Decomposing the Price Effect</div>
          <div class="compare">
            <div class="compare-card">
              <h4>① Substitution Effect (SE) — Hiệu ứng thay thế</h4>
              <p>Thay đổi trong tiêu dùng do sự biến động của giá tương đối, trong khi độ thỏa mãn (utility) được giữ cố định.</p>
            </div>
            <div class="compare-card">
              <h4>② Income Effect (IE) — Hiệu ứng thu nhập</h4>
              <p>Thay đổi trong tiêu dùng do sức mua thực tế tăng lên khi giá của hàng hóa đó sụt giảm.</p>
            </div>
          </div>
          <div class="formula">
            <div class="label">Slutsky Decomposition</div>
            Total Effect (TE) = Substitution Effect (SE) + Income Effect (IE)<br>
            \\( \\Delta Q_{\\text{total}} = \\Delta Q_{\\text{SE}} + \\Delta Q_{\\text{IE}} \\)
          </div>
        </div>
        `
      }
    ]
  },
  {
    id: "giffen",
    chapterNum: "06",
    chapterTitle: "The Giffen Good — Hàng Giffen",
    chapterSub: "Trường hợp ngoại lệ của Luật cầu · Upward-sloping demand curve",
    blocks: [
      {
        type: "raw",
        content: `
        <div class="concept">
          <div class="concept-title">Giffen Good — Định nghĩa và Cơ chế</div>
          <p><strong>Giffen Good:</strong> A good whose demand curve slopes <strong>upward</strong> because the negative income effect is <strong>larger than</strong> the substitution effect.</p>
          <div class="formula">
            <div class="label">Điều kiện để Có Giffen Good</div>
            Hàng phải là hàng cấp thấp (Inferior Good) và có hiệu ứng thu nhập lấn át hoàn toàn hiệu ứng thay thế: \\( |IE| > |SE| \\).
          </div>
        </div>
        `
      }
    ]
  },
  {
    id: "s3-exercises-new",
    chapterNum: "Ex",
    chapterTitle: "Bài tập bổ sung Section 3 — Từ Slide &amp; Docx",
    chapterSub: "Exercises from Section 3 PPTX & Docx files",
    blocks: [
      {
        type: "raw",
        content: `
        <div class="exercise">
          <div class="exercise-title">✏️ Slide 15 — Utility function \\( u = x^{0.5} y^{0.5} \\)</div>
          <div class="ex-q">I = 10,000,000 VND. \\( P_x = 10{,}000 \\) VND, \\( P_y = 20{,}000 \\) VND. Tìm lượng cầu tối ưu của hàng X.</div>
          <details>
            <summary>Xem đáp án</summary>
            <div class="answer">
              <p>Áp dụng nguyên lý chia đều ngân sách cho hàm Cobb-Douglas có số mũ bằng nhau:</p>
              <p>Ngân sách cho X = 50% × 10,000,000 = 5,000,000 VND.</p>
              <p>\\( x^* = 5{,}000{,}000 / 10{,}000 = \\mathbf{500 \\text{ units}} \\).</p>
            </div>
          </details>
        </div>
        `
      }
    ]
  }
];

// =========================================================================
// SECTION 4 DATA
// =========================================================================
const section4Data = [
  {
    id: "market",
    chapterNum: "01",
    chapterTitle: "Market Demand — Cầu thị trường",
    chapterSub: "From Individual to Market Demand · Horizontal Summation · Elasticity · Consumer Surplus",
    blocks: [
      {
        type: "raw",
        content: `
        <div class="concept" id="horizontal">
          <div class="concept-title">Market Demand Curve &amp; Horizontal Summation</div>
          <p>Đường cầu thị trường được tạo ra bằng phương pháp <strong>cộng gộp theo chiều ngang</strong> toàn bộ lượng cầu cá nhân ở từng mức giá: \\( Q_M(P) = \\sum Q_i(P) \\).</p>
        </div>
        `
      },
      {
        type: "raw",
        content: `
        <div class="concept" id="elasticity">
          <div class="concept-title">Price Elasticity of Demand — Độ co giãn theo giá</div>
          <div class="formula">
            \\[ E_p = \\frac{\\%\\Delta Q}{\\%\\Delta P} = \\frac{\\Delta Q}{\\Delta P} \\cdot \\frac{P}{Q} \\]
          </div>
          <p>Tổng doanh thu (TR) đạt cực đại tại điểm cầu co giãn đơn vị: \\( |E_p| = 1 \\) (tương ứng lúc này doanh thu biên \\( MR = 0 \\)).</p>
        </div>
        `
      },
      {
        type: "raw",
        content: `
        <div class="concept" id="cs">
          <div class="concept-title">Consumer Surplus — Thặng dư người tiêu dùng</div>
          <p>Thặng dư người tiêu dùng (CS) được đo lường bằng diện tích hình tam giác nằm phía dưới đường cầu và phía trên mức giá thực tế thị trường.</p>
        </div>
        `
      },
      {
        type: "raw",
        content: `
        <div class="concept" id="ps4">
          <div class="concept-title">Problem Set 4 — Bài tập Toll Bridge</div>
          <div class="ex-q">Hàm cầu cây cầu: \\( P = 15 - \\frac{1}{2}Q \\). Tính CS khi mức phí bằng $0 và khi bằng $5.</div>
          <details>
            <summary>Xem đáp án</summary>
            <div class="answer">
              <p>• Khi P = 0 → Q = 30 → \\( CS = \\frac{1}{2} \\times 30 \\times 15 = \\mathbf{\\$225} \\)</p>
              <p>• Khi P = 5 → Q = 20 → \\( CS = \\frac{1}{2} \\times 20 \\times (15-5) = \\mathbf{\\$100} \\)</p>
              <p>Phần thặng dư mất đi (Loss of CS) = 225 - 100 = $125.</p>
            </div>
          </details>
        </div>
        `
      }
    ]
  },
  {
    id: "worklei",
    chapterNum: "02",
    chapterTitle: "Work-Leisure Decisions — Quyết định làm việc và nghỉ ngơi",
    chapterSub: "Labor Supply · Time Allocation · Backward-Bending Supply Curve",
    blocks: [
      {
        type: "raw",
        content: `
        <div class="concept" id="budget-wl">
          <div class="concept-title">Work-Leisure Budget Constraint &amp; Optimum</div>
          <div class="formula">
            <div class="label">Full Income Constraint</div>
            \\[ p \\cdot C + w \\cdot F = wT + M \\]
            Trong đó F là thời gian nghỉ ngơi (Leisure), C là tiêu dùng, w là mức lương biên.
          </div>
          <p>Điều kiện lựa chọn tối ưu: \\( \\text{MRS}_{FC} = \\frac{MU_F}{MU_C} = \\frac{w}{p} \\).</p>
          <p>Khi hiệu ứng thu nhập lấn át hiệu ứng thay thế ở mức lương cao, đường cung lao động sẽ xuất hiện đoạn gãy quặt về sau (Backward-Bending Labor Supply Curve).</p>
        </div>
        `
      }
    ]
  },
  {
    id: "inter",
    chapterNum: "03",
    chapterTitle: "Intertemporal Decisions — Quyết định liên thời gian",
    chapterSub: "Two-Period Model · Present Value · Saving vs Borrowing",
    blocks: [
      {
        type: "raw",
        content: `
        <div class="concept" id="pv">
          <div class="concept-title">Intertemporal Budget Constraint</div>
          <div class="formula">
            \\[ C_0 + \\frac{C_1}{1+r} = M_0 + \\frac{M_1}{1+r} \\]
          </div>
          <p>Mô hình giúp giải thích hành vi phân bổ tiêu dùng qua 2 thời kỳ (Hiện tại C₀ và Tương lai C₁) dựa trên lãi suất thị trường r và tỷ lệ ưa thích thời gian ρ.</p>
        </div>
        `
      }
    ]
  }
];
