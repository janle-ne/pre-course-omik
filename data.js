// ==========================================
// Dữ liệu cho Section 1
// ==========================================
const section1Data = [
  {
    isRawHtml: true,
    content: String.raw`
    <section class="chapter" id="overview-1">
      <div class="chapter-header">
        <div class="chapter-num">01</div>
        <div class="chapter-title">
          <h2>Tổng quan &amp; 7 Nguyên lý Kinh tế Vi mô</h2>
          <p>Chapter 1: Microeconomics vs Macroeconomics & Seven Principles</p>
        </div>
      </div>

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
    </section>

    <section class="chapter" id="supply-demand">
      <div class="chapter-header">
        <div class="chapter-num">02</div>
        <div class="chapter-title">
          <h2>Cung và Cầu (Supply and Demand)</h2>
          <p>Chapter 2: Đây là công cụ cốt lõi để dự đoán giá cả và tác động của các chính sách.</p>
        </div>
      </div>

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
    </section>

    <section class="chapter" id="market">
      <div class="chapter-header">
        <div class="chapter-num">03</div>
        <div class="chapter-title">
          <h2>Cơ chế thị trường (Market Mechanism)</h2>
          <p>Mô hình này chỉ dùng được cho thị trường cạnh tranh (người mua/bán không có quyền lực ảnh hưởng lớn đến giá).</p>
        </div>
      </div>

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
          1. <strong>Thay đổi LƯỢNG cầu/cung (Movement along the curve - Trượt dọc):</strong> Chỉ xảy ra khi GIÁ của bản thân món hàng đó thay đổi. Điểm cân bằng chạy lên chạy xuống trên chính cái đường cong đã vẽ.<br>
          2. <strong>Thay đổi CẦU/CUNG (Shift in the curve - Dịch chuyển):</strong> Xảy ra khi cái giả định Ceteris Paribus bị phá vỡ. Một yếu tố bên ngoài (không phải giá) đột nhiên thay đổi, làm bẻ gãy toàn bộ cấu trúc ban đầu.</p>
        </div>

        <div class="exercise">
          <div class="exercise-title">✏️ BÀI TẬP TÌNH HUỐNG (Case Study)</div>
          <div class="ex-q">Giả sử bạn đang vận hành một dự án kinh doanh nước ép và đồ uống tốt cho sức khỏe tên là Freshy Juicy.</div>
          <p><strong>Tình huống 1:</strong> Giá trái cây tươi (nguyên liệu đầu vào) bất ngờ tăng vọt.<br>
          <em>Phân tích:</em> Chi phí sản xuất tăng làm giảm lợi nhuận trên mỗi đơn vị. Do đó, đường Cung (Supply) dịch chuyển sang Trái. Kết quả: Giá cân bằng trên thị trường đồ uống tăng lên, và số lượng tiêu thụ giảm xuống.</p>
          
          <p><strong>Tình huống 2:</strong> Trà sữa (Hàng thay thế - Substitute) vừa bị phanh phui chứa nhiều hóa chất độc hại, khiến người ta tẩy chay và giá trà sữa lao dốc, nhưng người tiêu dùng lại đổ xô đi tìm đồ uống thay thế.<br>
          <em>Phân tích:</em> Sở thích thay đổi hướng tới đồ uống sức khỏe. Đường Cầu (Demand) của Freshy Juicy sẽ dịch chuyển sang Phải. Kết quả: Giá và sản lượng bán ra của Freshy Juicy đều tăng!</p>
        </div>
      </div>

      <div class="concept">
        <div class="concept-title">4. Các ví dụ thực tế về Dịch chuyển Cân bằng trong Slide</div>
        <div class="concept-body">
          <ul>
            <li><strong>Trứng (Eggs):</strong> Năm 1970-2010, giá trứng giảm 55%. Tại sao? Cơ giới hóa làm giảm chi phí sản xuất (Đường cung dịch xuống/sang phải). Đồng thời người dân sợ cholesterol nên bớt ăn trứng (Đường cầu dịch sang trái). Kết quả: Giá giảm cực mạnh. (The supply curve shifted downward as production costs fell; the demand curve shifted to left as consumer preferences changed. => As a result, the real price of eggs fell sharply and egg consumption rose.)</li>
            <li><strong>Giáo dục Đại học (College):</strong> Chi phí cơ sở vật chất và lương giảng viên tăng (Đường cung dịch lên/sang trái). Nhu cầu học đại học cũng tăng mạnh (Đường cầu dịch sang phải). Kết quả: Giá học phí và lượng nhập học đều tăng vọt.</li>
            <li><strong>Khoáng sản (Đồng - Copper):</strong> Nhu cầu (Demand) trong thế kỷ qua tăng cả trăm lần. Đáng lẽ giá phải tăng phi mã. Tuy nhiên, công nghệ khai thác cũng phát triển làm giảm chi phí triệt để, đường Cung (Supply) cũng dịch phải với mức độ tương đương. Kết quả: Giá Đồng trong dài hạn gần như đi ngang.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="chapter" id="elasticity-time">
      <div class="chapter-header">
        <div class="chapter-num">04</div>
        <div class="chapter-title">
          <h2>Độ co giãn (Elasticity) và Thời gian</h2>
          <p>Độ co giãn đo lường tỷ lệ phần trăm thay đổi của một biến khi một biến khác tăng 1%.</p>
        </div>
      </div>

      <div class="concept">
        <div class="concept-title">1. Các loại độ co giãn cơ bản</div>
        <div class="concept-body">
          <p><strong>Price Elasticity of Demand (\( E_p \)):</strong> % thay đổi của lượng cầu khi giá tăng 1%.</p>
          <div class="formula">
            \[ E_p = \frac{\%\Delta Q}{\%\Delta P} \]
            <p style="font-size: 13px;">Note: \( \%\Delta Q = \frac{\text{end value} - \text{start value}}{\text{start value}} \times 100\% \)</p>
          </div>
          
          <p><strong>Income elasticity of demand:</strong> % thay đổi của lượng cầu khi thu nhập tăng 1%.</p>
          <p><strong>Cross-price elasticity of demand:</strong> % thay đổi của lượng cầu hàng hóa A khi giá hàng hóa B tăng 1%.</p>
          <ul>
            <li><strong>Trường hợp 1: Hàng hóa thay thế (Substitute Goods) → Kết quả DƯƠNG (>0)</strong><br>
            Bản chất: Đây là hai mặt hàng có thể dùng thay cho nhau (vd: Coca và Pepsi, Xe máy Honda và Yamaha). Giải thích dấu Dương: Nếu giá vé xem phim tại rạp CGV bất ngờ tăng mạnh (Giá A tăng mang dấu +), người người ta sẽ xót tiền và quyết định ở nhà đăng ký Netflix. Lúc này, lượng người mua gói Netflix tăng lên (Lượng B tăng mang dấu +). Cộng chia Cộng ra Cộng. Sự dịch chuyển diễn ra cùng chiều.</li>
            <li><strong>Trường hợp 2: Hàng hóa bổ sung (Complementary Goods) → Kết quả ÂM (<0)</strong><br>
            Bản chất: Đây là những combo phải đi liền với nhau mới xài được (vd: Vợt cầu lông và Quả cầu lông, Vỏ ốp lưng và Điện thoại iPhone). Giải thích dấu Âm: Nếu giá xe ô tô tăng vọt (Giá A tăng mang dấu +), người ta sẽ mua ít ô tô đi. Vì không có xe, nên người ta cũng chẳng cần mua xăng làm gì nữa, lượng xăng bán ra sụt giảm (Lượng B giảm mang dấu -). Trừ chia Cộng ra Trừ. Sự dịch chuyển diễn ra ngược chiều.</li>
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
        <div class="concept-title">3. Ngắn hạn (Short-Run - SR) vs. Dài hạn (Long-Run - LR)</div>
        <div class="concept-body">
          <p>Đây là phần cực kỳ ăn điểm trong các bài thi:</p>
          <p><strong>Đối với Cầu (Demand):</strong></p>
          <ul>
            <li><strong>Hàng hóa thông thường (Xăng):</strong> Ngắn hạn ít co giãn (không thể đổi xe ô tô tốn xăng ngay lập tức). Dài hạn co giãn nhiều hơn (người ta chuyển sang mua xe nhỏ tiết kiệm nhiên liệu).</li>
            <li><strong>Hàng hóa lâu bền (Durable goods - Ô tô):</strong> Ngược lại! Ngắn hạn cầu rất co giãn (giá tăng, người ta hoãn mua xe mới ngay lập tức). Dài hạn ít co giãn hơn (xe cũ hỏng thì kiểu gì cũng phải mua xe mới).</li>
            <li><strong>Co giãn theo Thu nhập (Income Elasticity):</strong> Hàng hóa bình thường thì \( LR > SR \). Hàng lâu bền thì \( SR > LR \) (Ngắn hạn lớn hơn nhiều so với dài hạn).</li>
          </ul>
          
          <p><strong>Đối với Cung (Supply):</strong></p>
          <ul>
            <li><strong>Đồng nguyên sinh (Primary Copper):</strong> Giống hầu hết hàng hóa, Dài hạn co giãn lớn hơn (có thời gian mở rộng nhà máy).</li>
            <li><strong>Đồng thứ cấp/Tái chế (Secondary Copper):</strong> Ngược lại! Ngắn hạn co giãn mạnh (giá tăng thì người ta lập tức thu gom phế liệu đi bán). Dài hạn ít co giãn hơn (vì nguồn cung phế liệu cạn kiệt).</li>
          </ul>

          <p><strong>Cà phê:</strong> Hạn hán ở Brazil làm đường cung dịch trái. Trong ngắn hạn, Cung và Cầu đều hoàn toàn không co giãn (vô cùng cứng nhắc do thói quen uống và chu kỳ trồng trọt), khiến giá vọt lên đỉnh \( (P_1) \). Trong dài hạn, Cung và Cầu co giãn hơn, giá sẽ rơi trở lại điểm cân bằng ban đầu \( (P_0) \).</p>
        </div>
      </div>
    </section>

    <section class="chapter" id="price-controls">
      <div class="chapter-header">
        <div class="chapter-num">05</div>
        <div class="chapter-title">
          <h2>Sự can thiệp của chính phủ - Kiểm soát giá</h2>
          <p>Nguyên lý 6 nói thị trường là cách tốt nhất, nhưng đôi khi chính phủ phải can thiệp.</p>
        </div>
      </div>

      <div class="concept">
        <div class="concept-body">
          <p>Một trong những công cụ là Price Controls (Kiểm soát giá).</p>
          <p><strong>Trần giá (Price Ceiling - \( P_{max} \)):</strong> Chính phủ quy định mức giá tối đa thấp hơn mức giá cân bằng của thị trường \( (P_{max} < P_0) \).</p>
          <ul>
            <li>Hậu quả: Tại mức giá thấp này, nhà sản xuất giảm cung (còn \( Q_1 \)), nhưng người tiêu dùng lại tăng cầu (lên \( Q_2 \)). Kết quả dẫn đến Shortage (Sự thiếu hụt trầm trọng / Excess Demand).</li>
            <li>Ví dụ Khí tự nhiên (Natural gas): Giá thị trường tự do là $6.40/mcf. Sản lượng là 23 Tcf. Chính phủ áp đặt giá trần \( P_G = \$3.00 \). Lắp $3.00 vào phương trình, Cung chỉ còn 20.6 Tcf, nhưng Cầu vọt lên 29.1 Tcf. Thiếu hụt = 29.1 - 20.6 = 8.5 Tcf.</li>
          </ul>
        </div>

        <div class="exercise">
          <div class="exercise-title">✏️ BÀI TẬP MẪU ĐẶC TRƯNG (Trích từ case Lúa mì - Wheat Market)</div>
          <div class="ex-q">Đề bài: Vào năm 1981, thị trường lúa mì có số liệu sau. Hãy tìm Giá cân bằng và Số lượng cân bằng.</div>
          <p>Phương trình đường cung (Supply): \( Q_S = 1800 + 240P \)</p>
          <p>Phương trình đường cầu (Demand): \( Q_D = 3550 - 266P \)</p>
          <details>
            <summary>Giải thích & Lời giải (Answer & Explanation)</summary>
            <div class="answer">
              <p>Để tìm trạng thái Market Clearing (Thị trường xóa sổ/Cân bằng), ta đặt Lượng Cung = Lượng Cầu \( (Q_S = Q_D) \).</p>
              \[ 1800 + 240P = 3550 - 266P \]
              \[ 506P = 1750 \]
              \[ P = \$3.46/\text{bushel} \]
              <p>Thay P ngược lại vào phương trình Cung (hoặc Cầu để kiểm tra chéo):</p>
              \[ Q_S = 1800 + 240(3.46) = 2630 \text{ millions of bushels} \]
              <p><strong>Elasticity:</strong> \( \epsilon = \frac{\Delta Q/Q}{\Delta P/P} = \frac{\Delta Q}{\Delta P} \times \frac{P}{Q} \)</p>
              <p>Given: \( P = 3.46 \rightarrow Q_S = 2630, Q_D = 2630 \)</p>
              <p><strong>Supply:</strong> \( Q_S = 1800 + 240P \rightarrow \frac{\Delta Q}{\Delta P} = 240 \)</p>
              \[ \epsilon_S = \frac{\Delta Q}{\Delta P} \times \frac{P}{Q} = 240 \times \frac{3.46}{2630} = 0.32\% \]
              <p><strong>Demand:</strong> \( Q_D = 3550 - 266P \rightarrow \frac{\Delta Q}{\Delta P} = -266 \)</p>
              \[ \epsilon_D = \frac{\Delta Q}{\Delta P} \times \frac{P}{Q} = -266 \times \frac{3.46}{2630} = -0.35\% \]
            </div>
          </details>
        </div>

        <div class="trap">
          <div class="trap-title">⚠️ BẪY CHẾT NGƯỜI TRONG ĐỀ THI (The Inverse Demand Trap)</div>
          <p>Các giáo viên ra đề thi rất thích gài bẫy sinh viên ở điểm này. Họ sẽ KHÔNG cho phương trình dạng \( Q = a + bP \) nữa, mà họ sẽ đảo ngược lại thành Hàm cầu ngược (Inverse Demand Function) có dạng: \( P = c - dQ \)</p>
          <p><strong>Ví dụ bẫy:</strong> Đề bài cho đường cầu lúa mì là \( P = 13.35 - 0.00376Q \). Nhiều sinh viên hấp tấp lấy ngay con số -0.00376 làm \( \frac{\Delta Q}{\Delta P} \) để tính độ co giãn. <strong>SAI HOÀN TOÀN!</strong></p>
          <p><strong>Cách xử lý đúng:</strong> Con số -0.00376 thực chất là \( \frac{\Delta P}{\Delta Q} \) (độ dốc theo trục đứng). Để tìm đúng hệ số b \( (\frac{\Delta Q}{\Delta P}) \), bạn bắt buộc phải làm 1 trong 2 cách:</p>
          <ol>
            <li><strong>Cách 1:</strong> Biến đổi đại số để cô lập biến Q về một vế: \( Q = \frac{13.35}{0.00376} - \frac{1}{0.00376}P \approx 3550 - 266P \). Lúc này hệ số đứng trước P mới xuất hiện là -266.</li>
            <li><strong>Cách 2 (Mẹo nhanh):</strong> Nhớ rằng \( \frac{\Delta Q}{\Delta P} = \frac{1}{\frac{\Delta P}{\Delta Q}} = \frac{1}{-0.00376} \approx -266 \).</li>
          </ol>
          <p>The Supply Curve: \( Q = a + bP \)<br>The Demand Curve: \( Q = a - bP \)</p>
        </div>
      </div>
    </section>

    <section class="chapter" id="elasticity-deep">
      <div class="chapter-header">
        <div class="chapter-num">06</div>
        <div class="chapter-title">
          <h2>Đi sâu vào Độ co giãn (Elasticity Review)</h2>
          <p>Phân tích sâu PED, PES và các bẫy thường gặp</p>
        </div>
      </div>

      <div class="concept">
        <div class="concept-title">1. Độ co giãn của Cầu theo giá (Price Elasticity of Demand - PED)</div>
        <div class="concept-body">
          <p>Đối với phần Cầu, thời gian ảnh hưởng đến độ co giãn phụ thuộc hoàn toàn vào loại hàng hóa (bản chất của sản phẩm). Chúng ta chia làm 2 nhóm:</p>
          <p><strong>A. Hàng hóa tiêu dùng thông thường / Không lâu bền (Non-durable Goods)</strong><br>
          Ví dụ: Xăng dầu, cà phê, vé xem phim, điện, nước.</p>
          <ul>
            <li>Ngắn hạn (Short-run): Cầu kém co giãn (Inelastic). Đường cầu dốc (steep).</li>
            <li>Dài hạn (Long-run): Cầu co giãn nhiều hơn (Elastic). Đường cầu thoải (flat).</li>
            <li>Giải thích bản chất: Khi giá xăng đột ngột tăng vọt ngày hôm nay, ngày mai em vẫn phải đổ xăng để đi học/đi làm → lượng cầu giảm rất ít (kém co giãn). Tuy nhiên, nếu giá xăng giữ ở mức cao trong 3 năm, em sẽ có thời gian để thay đổi thói quen: chuyển sang đi xe bus, mua xe máy điện, hoặc chuyển phòng trọ đến gần trường hơn → lượng cầu giảm mạnh (co giãn nhiều).</li>
            <li>Keyword: Habit formation (Hình thành thói quen), Time to find substitutes (Thời gian tìm hàng hóa thay thế).</li>
          </ul>

          <p><strong>B. Hàng hóa lâu bền (Durable Goods) - BẪY KINH ĐIỂN</strong><br>
          Ví dụ: Ô tô, tủ lạnh, tivi, máy giặt.</p>
          <ul>
            <li>Ngắn hạn (Short-run): Cầu co giãn nhiều (Elastic).</li>
            <li>Dài hạn (Long-run): Cầu kém co giãn (Inelastic).</li>
            <li>Giải thích bản chất (Tại sao lại ngược đời?): Giả sử giá tủ lạnh tăng 20%. Trong ngắn hạn, nếu chiếc tủ lạnh ở nhà đang hơi cũ nhưng vẫn dùng được, em sẽ quyết định trì hoãn (postpone) việc mua mới → lượng cầu thị trường rớt thê thảm (co giãn nhiều). Nhưng trong dài hạn (ví dụ 5-10 năm), chiếc tủ lạnh cũ đó kiểu gì cũng sẽ hỏng hẳn. Dù giá có đang cao, em vẫn BẮT BUỘC phải mua cái mới để thay thế → lượng cầu phục hồi và ít bị ảnh hưởng bởi giá hơn (kém co giãn).</li>
            <li>Keyword: Postponement of purchase (Sự trì hoãn mua sắm), Replacement cycle (Chu kỳ thay thế).</li>
          </ul>
        </div>
      </div>

      <div class="concept">
        <div class="concept-title">2. Độ co giãn của Cung theo giá (Price Elasticity of Supply - PES)</div>
        <div class="concept-body">
          <p>Đối với phần Cung, quy luật lại nhất quán và dễ nhớ hơn rất nhiều.</p>
          <ul>
            <li><strong>Quy luật chung:</strong> Đối với hầu hết mọi loại hàng hóa, Cung trong dài hạn LUÔN LUÔN co giãn nhiều hơn (More Elastic) so với trong ngắn hạn.</li>
            <li>Ngắn hạn (Short-run): Kém co giãn. Các doanh nghiệp bị giới hạn bởi công suất cố định (Fixed capacity). Dù giá thị trường có tăng vọt, nhà máy sản xuất giày của em cũng không thể ngay lập tức sản xuất gấp đôi vì thiếu máy móc và nhân công.</li>
            <li>Dài hạn (Long-run): Co giãn nhiều. Các doanh nghiệp có đủ thời gian để mở rộng quy mô (xây thêm nhà máy mới) và đặc biệt là có sự gia nhập thị trường (Market Entry) của các đối thủ mới khi thấy ngành này đang có lợi nhuận cao.</li>
            <li>Keyword: Capacity constraints (Giới hạn công suất), Capital expansion (Mở rộng vốn/quy mô), Market Entry/Exit (Gia nhập/Rút lui khỏi thị trường).</li>
          </ul>
        </div>

        <div class="exercise">
          <div class="exercise-title">✏️ 3. Bài tập Tình huống (Case Study)</div>
          <div class="ex-q">Chính phủ đánh một mức thuế lớn làm giá Xe máy (Hàng lâu bền) và Bánh mì (Hàng không lâu bền) cùng tăng 15%. Hãy so sánh sự sụt giảm về số lượng bán ra (Quantity Demanded - \( Q_D \)) của hai mặt hàng này trong 1 tháng tới (Ngắn hạn) và 5 năm tới (Dài hạn).</div>
          <details>
            <summary>Trả lời và Giải thích</summary>
            <div class="answer">
              <p><strong>Với Bánh mì (Non-durable):</strong></p>
              <ul>
                <li>1 tháng tới: \( Q_D \) giảm nhẹ (Inelastic). Mọi người vẫn cần ăn sáng và chưa kịp tìm món thay thế rẻ hơn.</li>
                <li>5 năm tới: \( Q_D \) giảm mạnh (Elastic). Người tiêu dùng đã quen chuyển sang ăn xôi, bún, phở.</li>
              </ul>
              <p><strong>Với Xe máy (Durable):</strong></p>
              <ul>
                <li>1 tháng tới: \( Q_D \) giảm cực mạnh (Elastic). Người dân thấy đắt nên tiếp tục đi xe cũ, chưa vội mua ngay.</li>
                <li>5 năm tới: \( Q_D \) giảm ít hơn (Inelastic). Dù giá đắt nhưng xe cũ đã nát hỏng, người dân bắt buộc phải mua xe mới để có phương tiện đi lại.</li>
              </ul>
            </div>
          </details>
        </div>

        <div class="keywords">
          <div class="keywords-title">🔑 4. Tổng hợp Keywords & Cách nhận biết "Bẫy"</div>
          <div class="kw-list" style="display:block;">
            <p style="color:var(--gold); font-size:14px;">Để đi thi không bao giờ mất điểm phần này, em chỉ cần nhớ "thần chú" sau:</p>
            <ul style="color:var(--gold); font-family:'JetBrains Mono', monospace; font-size:13px;">
              <li>1. Hỏi về <strong>CUNG (Supply)</strong>? → Dài hạn luôn co giãn HƠN ngắn hạn (Nhờ thời gian mở rộng quy mô).</li>
              <li>2. Hỏi về <strong>CẦU (Demand)</strong>? → Dừng lại 1 giây và tự hỏi: "Đây là hàng hóa dùng 1 lần (xăng, ăn uống) hay hàng hóa xài chục năm (xe, tivi)?"
                <ul>
                  <li>Dùng 1 lần → Dài hạn co giãn HƠN.</li>
                  <li>Xài chục năm → Ngắn hạn co giãn HƠN (Bẫy thường xuyên xuất hiện trong các bài trắc nghiệm).</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="chapter" id="mcqs">
      <div class="chapter-header">
        <div class="chapter-num">07</div>
        <div class="chapter-title">
          <h2>MCQs: Trọn bộ 29 câu hỏi trắc nghiệm</h2>
          <p>Tất cả câu hỏi từ tài liệu gốc được giữ nguyên và giải thích chi tiết</p>
        </div>
      </div>

      <div class="concept">
        <p style="font-style:italic; color:var(--muted); margin-bottom: 24px;">Lưu ý: Click vào từng câu để xem đáp án đúng (Ans) và giải thích vì sao đáp án đó là đúng, các đáp án còn lại là sai.</p>
        
        <div class="exercise">
          <div class="ex-q">1. In a market economy, supply and demand determine</div>
          <div class="ex-en">
            a. both the quantity of each good produced and the price at which it is sold.<br>
            b. the quantity of each good produced but not the price at which it is sold.<br>
            c. the price at which each good is sold but not the quantity of each good produced.<br>
            d. neither the quantity of each good produced nor the price at which it is sold.
          </div>
          <details>
            <summary>Xem Đáp Án & Giải Thích</summary>
            <div class="answer">
              <div class="answer-title">Đáp án: A</div>
              <p><strong>Giải thích:</strong> Trong nền kinh tế thị trường (nguyên lý 6), cung và cầu tương tác với nhau để tạo ra điểm cân bằng (Equilibrium). Điểm cân bằng này xác định đồng thời cả Mức giá (Price) và Số lượng (Quantity).</p>
            </div>
          </details>
        </div>

        <div class="exercise">
          <div class="ex-q">2. In a market economy,</div>
          <div class="ex-en">
            a. supply determines demand and demand, in turn, determines prices.<br>
            b. demand determines supply and supply, in turn, determines prices.<br>
            c. the allocation of scarce resources determines prices and prices, in turn, determine supply and demand.<br>
            d. supply and demand determine prices and prices, in turn, allocate the economy's scarce resources.
          </div>
          <details>
            <summary>Xem Đáp Án & Giải Thích</summary>
            <div class="answer">
              <div class="answer-title">Đáp án: D</div>
              <p><strong>Giải thích:</strong> Cung và cầu quyết định mức giá. Sau đó, chính mức giá này đóng vai trò là "tín hiệu" (như bàn tay vô hình) để phân bổ các nguồn lực khan hiếm của nền kinh tế (nguyên lý phân bổ nguồn lực).</p>
            </div>
          </details>
        </div>

        <div class="exercise">
          <div class="ex-q">3. In a competitive market, the price of a product</div>
          <div class="ex-en">
            a. is determined by buyers, and the quantity of the product produced is determined by sellers.<br>
            b. is determined by sellers, and the quantity of the product produced is determined by buyers.<br>
            c. and the quantity of the product produced are both determined by sellers.<br>
            d. None of the above is correct.
          </div>
          <details>
            <summary>Xem Đáp Án & Giải Thích</summary>
            <div class="answer">
              <div class="answer-title">Đáp án: D</div>
              <p><strong>Giải thích:</strong> Trong thị trường cạnh tranh, giá không được quyết định bởi riêng người mua hay người bán, mà được quyết định bởi SỰ TƯƠNG TÁC của cả người mua và người bán. Do đó A, B, C đều sai.</p>
            </div>
          </details>
        </div>

        <div class="exercise">
          <div class="ex-q">4. A competitive market is a market in which</div>
          <div class="ex-en">
            a. an auctioneer helps set prices and arrange sales.<br>
            b. there are only a few sellers.<br>
            c. the forces of supply and demand do not apply.<br>
            d. no individual buyer or seller has any significant impact on the market price.
          </div>
          <details>
            <summary>Xem Đáp Án & Giải Thích</summary>
            <div class="answer">
              <div class="answer-title">Đáp án: D</div>
              <p><strong>Giải thích:</strong> Định nghĩa thị trường cạnh tranh: có vô số người mua và người bán, sản phẩm đồng nhất, nên không một cá nhân nào (người mua hay người bán) có đủ quyền lực để tự ý thay đổi giá cả thị trường.</p>
            </div>
          </details>
        </div>

        <div class="exercise">
          <div class="ex-q">5. Assume Diana buys computers in a competitive market. It follows that</div>
          <div class="ex-en">
            a. Diana has a limited number of sellers to turn to when she buys a computer.<br>
            b. Diana will find herself negotiating with sellers whenever she buys a computer.<br>
            c. if Diana buys a large number of computers, the price of computers will rise noticeably.<br>
            d. None of the above is correct.
          </div>
          <details>
            <summary>Xem Đáp Án & Giải Thích</summary>
            <div class="answer">
              <div class="answer-title">Đáp án: D</div>
              <p><strong>Giải thích:</strong> Trong thị trường cạnh tranh: có RẤT NHIỀU người bán (A sai), giá được thị trường ấn định nên không cần thương lượng (B sai), và một cá nhân như Diana không thể mua đủ nhiều để làm thay đổi giá trị trường rộng lớn (C sai).</p>
            </div>
          </details>
        </div>

        <div class="exercise">
          <div class="ex-q">6. An increase in quantity demanded</div>
          <div class="ex-en">
            a. results in a movement downward and to the right along a demand curve.<br>
            b. results in a movement upward and to the left along a demand curve.<br>
            c. shifts the demand curve to the left.<br>
            d. shifts the demand curve to the right.
          </div>
          <details>
            <summary>Xem Đáp Án & Giải Thích</summary>
            <div class="answer">
              <div class="answer-title">Đáp án: A</div>
              <p><strong>Giải thích:</strong> "Quantity demanded" (Lượng cầu) tăng chỉ xảy ra khi GIÁ GIẢM. Khi giá giảm, ta trượt (movement) dọc theo đường cầu xuống dưới và sang phải. Bẫy: C và D dùng "shifts" là sai hoàn toàn vì đây là thay đổi lượng, không phải thay đổi toàn bộ Cầu.</p>
            </div>
          </details>
        </div>

        <div class="exercise">
          <div class="ex-q">7. When the price of a good or service changes,</div>
          <div class="ex-en">
            a. the supply curve shifts in the opposite direction.<br>
            b. the demand curve shifts in the opposite direction.<br>
            c. the demand curve shifts in the same direction.<br>
            d. there is a movement along a given demand curve.
          </div>
          <details>
            <summary>Xem Đáp Án & Giải Thích</summary>
            <div class="answer">
              <div class="answer-title">Đáp án: D</div>
              <p><strong>Giải thích:</strong> Nguyên tắc vàng: Giá của chính nó thay đổi → Trượt dọc (movement along the curve). Chỉ có yếu tố ngoài giá thay đổi mới gây ra Shift. Nên A, B, C đều sai.</p>
            </div>
          </details>
        </div>

        <div class="exercise">
          <div class="ex-q">8. The law of demand states that, other things equal, an increase in</div>
          <div class="ex-en">
            a. price causes quantity demanded to increase.<br>
            b. price causes quantity demanded to decrease.<br>
            c. quantity demanded causes price to increase.<br>
            d. quantity demanded causes price to decrease.
          </div>
          <details>
            <summary>Xem Đáp Án & Giải Thích</summary>
            <div class="answer">
              <div class="answer-title">Đáp án: B</div>
              <p><strong>Giải thích:</strong> Định luật Cầu (Law of demand) mô tả mối quan hệ nghịch biến: Giá tăng → Lượng cầu giảm. Chú ý nhân quả: Giá thay đổi khiến lượng thay đổi, không phải ngược lại.</p>
            </div>
          </details>
        </div>

        <div class="exercise">
          <div class="ex-q">9. The demand curve for a good is a line that relates</div>
          <div class="ex-en">
            a. price and quantity demanded.<br>
            b. income and quantity demanded.<br>
            c. quantity demanded and quantity supplied.<br>
            d. price and income.
          </div>
          <details>
            <summary>Xem Đáp Án & Giải Thích</summary>
            <div class="answer">
              <div class="answer-title">Đáp án: A</div>
              <p><strong>Giải thích:</strong> Đồ thị đường cầu có trục tung là Giá (Price) và trục hoành là Lượng cầu (Quantity demanded).</p>
            </div>
          </details>
        </div>

        <div class="exercise">
          <div class="ex-q">10. When quantity demanded increases at every possible price, the demand curve has</div>
          <div class="ex-en">
            a. shifted to the left.<br>
            b. shifted to the right.<br>
            c. not shifted; rather, we have moved along the demand curve to a new point on the same curve.<br>
            d. not shifted; rather, the demand curve has become steeper.
          </div>
          <details>
            <summary>Xem Đáp Án & Giải Thích</summary>
            <div class="answer">
              <div class="answer-title">Đáp án: B</div>
              <p><strong>Giải thích:</strong> Tăng ở "mọi mức giá" (at every possible price) có nghĩa là toàn bộ đường cầu đã dịch chuyển sang phải (increase in Demand).</p>
            </div>
          </details>
        </div>

        <div class="exercise">
          <div class="ex-q">11. The market demand curve</div>
          <div class="ex-en">
            a. is the sum of all individual demand curves.<br>
            b. is the demand curve for every product in an industry.<br>
            c. shows the average quantity demanded by individual demanders at each price.<br>
            d. is always flatter than an individual demand curve.
          </div>
          <details>
            <summary>Xem Đáp Án & Giải Thích</summary>
            <div class="answer">
              <div class="answer-title">Đáp án: A</div>
              <p><strong>Giải thích:</strong> Đường cầu thị trường (Market demand) được tạo ra bằng cách cộng gộp theo chiều ngang (sum horizontally) tất cả các đường cầu cá nhân.</p>
            </div>
          </details>
        </div>

        <div class="exercise">
          <div class="ex-q">12. The quantity supplied of a good is the amount that</div>
          <div class="ex-en">
            a. buyers are willing and able to purchase.<br>
            b. sellers are able to produce.<br>
            c. buyers and sellers agree will be brought to market.<br>
            d. sellers are willing and able to sell.
          </div>
          <details>
            <summary>Xem Đáp Án & Giải Thích</summary>
            <div class="answer">
              <div class="answer-title">Đáp án: D</div>
              <p><strong>Giải thích:</strong> Lượng cung (Quantity supplied) là số lượng hàng hóa mà người bán vừa SẴN SÀNG (willing) vừa CÓ KHẢ NĂNG (able) bán ra thị trường tại một mức giá nhất định.</p>
            </div>
          </details>
        </div>

        <div class="exercise">
          <div class="ex-q">13. Which of the following would cause a movement along the supply curve for cupcakes?</div>
          <div class="ex-en">
            a. an improvement in technology for commercial mixers<br>
            b. a decrease in the price of cupcakes<br>
            c. an increase in the price of cake flour<br>
            d. All of the above are correct.
          </div>
          <details>
            <summary>Xem Đáp Án & Giải Thích</summary>
            <div class="answer">
              <div class="answer-title">Đáp án: B</div>
              <p><strong>Giải thích:</strong> Lại là bẫy Movement/Shift. "Movement along" (trượt dọc) chỉ xảy ra khi giá của chính món hàng đó (giá cupcakes) thay đổi. A và C làm Shift đường cung.</p>
            </div>
          </details>
        </div>

        <div class="exercise">
          <div class="ex-q">14. Which of these statements best represents the law of supply?</div>
          <div class="ex-en">
            a. When input prices increase, sellers produce less of the good.<br>
            b. When production technology improves, sellers produce less of the good.<br>
            c. When the price of a good decreases, sellers produce less of the good.<br>
            d. When sellers' supplies of a good increase, the price of the good increases.
          </div>
          <details>
            <summary>Xem Đáp Án & Giải Thích</summary>
            <div class="answer">
              <div class="answer-title">Đáp án: C</div>
              <p><strong>Giải thích:</strong> Định luật Cung thể hiện tương quan thuận giữa Giá và Lượng. Giá giảm → sản xuất ít đi. Câu A là shift cung. Câu D bị ngược nhân quả (cung tăng thì giá phải giảm).</p>
            </div>
          </details>
        </div>

        <div class="exercise">
          <div class="ex-q">15. A improvement in production technology will shift the</div>
          <div class="ex-en">
            a. supply curve to the right.<br>
            b. supply curve to the left.<br>
            c. demand curve to the right.<br>
            d. demand curve to the left.
          </div>
          <details>
            <summary>Xem Đáp Án & Giải Thích</summary>
            <div class="answer">
              <div class="answer-title">Đáp án: A</div>
              <p><strong>Giải thích:</strong> Công nghệ cải tiến làm giảm chi phí sản xuất, giúp nhà sản xuất làm ra được nhiều hàng hơn với cùng một chi phí → Đường cung dịch sang phải.</p>
            </div>
          </details>
        </div>

        <div class="exercise">
          <div class="ex-q">16. If car manufacturers begin using new labor-saving technology on their assembly lines, we would not expect</div>
          <div class="ex-en">
            a. a smaller quantity of labor to be used.<br>
            b. the supply of cars to increase.<br>
            c. the firms' costs to fall.<br>
            d. individual car manufacturers to move up and to the right along their individual supply curves.
          </div>
          <details>
            <summary>Xem Đáp Án & Giải Thích</summary>
            <div class="answer">
              <div class="answer-title">Đáp án: D</div>
              <p><strong>Giải thích:</strong> Từ khóa "not expect". Công nghệ mới làm giảm lao động (A), tăng cung (B), giảm chi phí (C). Nhưng nó gây ra SHIFT (dịch chuyển) đường cung, chứ không gây ra MOVEMENT (trượt dọc) như đáp án D diễn tả.</p>
            </div>
          </details>
        </div>

        <div class="exercise">
          <div class="ex-q">17. At the equilibrium price, the quantity of the good that buyers are willing and able to buy</div>
          <div class="ex-en">
            a. is greater than the quantity that sellers are willing and able to sell.<br>
            b. exactly equals the quantity that sellers are willing and able to sell.<br>
            c. is less than the quantity that sellers are willing and able to sell.<br>
            d. Either a) or c) could be correct.
          </div>
          <details>
            <summary>Xem Đáp Án & Giải Thích</summary>
            <div class="answer">
              <div class="answer-title">Đáp án: B</div>
              <p><strong>Giải thích:</strong> Giá cân bằng (Equilibrium price) chính là trạng thái Market clearing, nơi Lượng Cầu hoàn toàn bằng Lượng Cung.</p>
            </div>
          </details>
        </div>

        <div class="exercise">
          <div class="ex-q">18. Buyers are able to buy all they want to buy and sellers are able to sell all they want to sell at</div>
          <div class="ex-en">
            a. prices at and above the equilibrium price.<br>
            b. prices at and below the equilibrium price.<br>
            c. prices above and below the equilibrium price, but not at the equilibrium price.<br>
            d. the equilibrium price but not above or below the equilibrium price.
          </div>
          <details>
            <summary>Xem Đáp Án & Giải Thích</summary>
            <div class="answer">
              <div class="answer-title">Đáp án: D</div>
              <p><strong>Giải thích:</strong> Chỉ duy nhất tại mức giá cân bằng thì thị trường mới "xóa sổ" hết hàng, không có dư thừa (surplus) hay thiếu hụt (shortage).</p>
            </div>
          </details>
        </div>

        <div class="exercise">
          <div class="ex-q">19. Which of the following events must cause equilibrium price to rise?</div>
          <div class="ex-en">
            a. demand increases and supply decreases<br>
            b. demand and supply both decrease<br>
            c. demand decreases and supply increases<br>
            d. demand and supply both increase
          </div>
          <details>
            <summary>Xem Đáp Án & Giải Thích</summary>
            <div class="answer">
              <div class="answer-title">Đáp án: A</div>
              <p><strong>Giải thích:</strong> Cầu tăng (đẩy giá lên) VÀ cung giảm (hàng hiếm cũng đẩy giá lên). Hai tác động cùng chiều đẩy giá lên cao chắc chắn làm giá cân bằng tăng vọt.</p>
            </div>
          </details>
        </div>

        <div class="exercise">
          <div class="ex-q">20. Suppose roses are currently selling for $20 per dozen, but the equilibrium price of roses is $30 per dozen. We would expect a</div>
          <div class="ex-en">
            a. shortage to exist and the market price of roses to increase.<br>
            b. shortage to exist and the market price of roses to decrease.<br>
            c. surplus to exist and the market price of roses to increase.<br>
            d. surplus to exist and the market price of roses to decrease.
          </div>
          <details>
            <summary>Xem Đáp Án & Giải Thích</summary>
            <div class="answer">
              <div class="answer-title">Đáp án: A</div>
              <p><strong>Giải thích:</strong> Giá hiện tại (20) đang THẤP hơn giá cân bằng (30). Lúc này cầu lớn hơn cung gây ra Shortage (thiếu hụt). Áp lực thị trường sẽ tự động đẩy giá tăng dần lên 30.</p>
            </div>
          </details>
        </div>

        <div class="exercise">
          <div class="ex-q">21. In general, elasticity is a measure of</div>
          <div class="ex-en">
            a. the extent to which advances in technology are adopted by producers.<br>
            b. the extent to which a market is competitive.<br>
            c. how firms' profits respond to changes in market prices.<br>
            d. how much buyers and sellers respond to changes in market conditions.
          </div>
          <details>
            <summary>Xem Đáp Án & Giải Thích</summary>
            <div class="answer">
              <div class="answer-title">Đáp án: D</div>
              <p><strong>Giải thích:</strong> Định nghĩa: Elasticity (Độ co giãn) đo lường mức độ phản ứng (respond) của người mua hoặc người bán trước những thay đổi của biến số kinh tế (như giá cả, thu nhập).</p>
            </div>
          </details>
        </div>

        <div class="exercise">
          <div class="ex-q">22. When studying how some event or policy affects a market, elasticity provides information on the</div>
          <div class="ex-en">
            a. equity effects on the market by identifying the winners and losers.<br>
            b. magnitude of the effect on the market.<br>
            c. speed of adjustment of the market in response to the event or policy.<br>
            d. number of market participants who are directly affected by the event or policy.
          </div>
          <details>
            <summary>Xem Đáp Án & Giải Thích</summary>
            <div class="answer">
              <div class="answer-title">Đáp án: B</div>
              <p><strong>Giải thích:</strong> Đường Cung Cầu cho biết "chiều hướng" (tăng hay giảm), nhưng Elasticity cho biết "mức độ/quy mô" (magnitude) của sự thay đổi đó là mạnh hay nhẹ.</p>
            </div>
          </details>
        </div>

        <div class="exercise">
          <div class="ex-q">23. The price elasticity of demand measures how much</div>
          <div class="ex-en">
            a. quantity demanded responds to a change in price.<br>
            b. quantity demanded responds to a change in income.<br>
            c. price responds to a change in demand.<br>
            d. demand responds to a change in supply.
          </div>
          <details>
            <summary>Xem Đáp Án & Giải Thích</summary>
            <div class="answer">
              <div class="answer-title">Đáp án: A</div>
              <p><strong>Giải thích:</strong> Theo định nghĩa, độ co giãn của cầu theo giá đo lường % thay đổi của LƯỢNG cầu khi GIÁ thay đổi.</p>
            </div>
          </details>
        </div>

        <div class="exercise">
          <div class="ex-q">24. Demand is said to be inelastic if</div>
          <div class="ex-en">
            a. buyers respond substantially to changes in the price of the good.<br>
            b. demand shifts only slightly when the price of the good changes.<br>
            c. the quantity demanded changes only slightly when the price of the good changes.<br>
            d. the price of the good responds only slightly to changes in demand.
          </div>
          <details>
            <summary>Xem Đáp Án & Giải Thích</summary>
            <div class="answer">
              <div class="answer-title">Đáp án: C</div>
              <p><strong>Giải thích:</strong> Inelastic = Kém co giãn = thay đổi lượng ít (slightly). Câu B sai từ "shifts", đường cầu không shift khi giá thay đổi.</p>
            </div>
          </details>
        </div>

        <div class="exercise">
          <div class="ex-q">25. Demand is elastic if the price elasticity of demand is</div>
          <div class="ex-en">
            a. less than 1.<br>
            b. equal to 1.<br>
            c. equal to 0.<br>
            d. greater than 1.
          </div>
          <details>
            <summary>Xem Đáp Án & Giải Thích</summary>
            <div class="answer">
              <div class="answer-title">Đáp án: D</div>
              <p><strong>Giải thích:</strong> Khi \( |E_p| > 1 \), tức là % lượng đổi > % giá đổi, ta gọi đó là Cầu co giãn nhiều (Elastic).</p>
            </div>
          </details>
        </div>

        <div class="exercise">
          <div class="ex-q">26. Goods with many close substitutes tend to have</div>
          <div class="ex-en">
            a. more elastic demands.<br>
            b. less elastic demands.<br>
            c. price elasticities of demand that are unit elastic.<br>
            d. income elasticities of demand that are negative.
          </div>
          <details>
            <summary>Xem Đáp Án & Giải Thích</summary>
            <div class="answer">
              <div class="answer-title">Đáp án: A</div>
              <p><strong>Giải thích:</strong> Nếu một món hàng có nhiều hàng thay thế (vd: kem đánh răng), chỉ cần giá tăng nhẹ, người mua sẽ đổi ngay sang loại khác → Lượng sụt giảm mạnh → Cầu rất co giãn (More elastic).</p>
            </div>
          </details>
        </div>

        <div class="exercise">
          <div class="ex-q">27. For a good that is a necessity, demand</div>
          <div class="ex-en">
            a. tends to be inelastic.<br>
            b. tends to be elastic.<br>
            c. has unit elasticity.<br>
            d. cannot be represented by a demand curve in the usual way.
          </div>
          <details>
            <summary>Xem Đáp Án & Giải Thích</summary>
            <div class="answer">
              <div class="answer-title">Đáp án: A</div>
              <p><strong>Giải thích:</strong> Hàng thiết yếu (necessity) như gạo, điện, nước tử tế... dù giá có tăng mạnh, người ta vẫn phải mua để sống. Do đó, lượng mua giảm rất ít → Kém co giãn (Inelastic).</p>
            </div>
          </details>
        </div>

        <div class="exercise">
          <div class="ex-q">28. The discovery of a new hybrid wheat would increase the supply of wheat. As a result, wheat farmers would realize an increase in total revenue if the</div>
          <div class="ex-en">
            a. supply of wheat is elastic.<br>
            b. supply of wheat is inelastic.<br>
            c. demand for wheat is inelastic.<br>
            d. demand for wheat is elastic.
          </div>
          <details>
            <summary>Xem Đáp Án & Giải Thích</summary>
            <div class="answer">
              <div class="answer-title">Đáp án: D</div>
              <p><strong>Giải thích:</strong> Cung tăng làm giá giảm mạnh, lượng bán ra tăng. Nếu cầu co giãn (elastic), lượng bán tăng cực nhiều bù đắp dư sức cho phần giá giảm, khiến Tổng doanh thu (Total Revenue) tăng lên.</p>
            </div>
          </details>
        </div>

        <div class="exercise">
          <div class="ex-q">29. The supply of oil is likely to be</div>
          <div class="ex-en">
            a. inelastic in both the short run and long run.<br>
            b. elastic in both the short run and long run.<br>
            c. elastic in the short run and inelastic in the long run.<br>
            d. inelastic in the short run and elastic in the long run.
          </div>
          <details>
            <summary>Xem Đáp Án & Giải Thích</summary>
            <div class="answer">
              <div class="answer-title">Đáp án: D</div>
              <p><strong>Giải thích:</strong> Quy luật Cung: Mọi loại hàng hóa trong dài hạn luôn co giãn nhiều hơn ngắn hạn. Ngắn hạn nhà máy lọc dầu bị giới hạn công suất (inelastic). Dài hạn xây thêm nhà máy khai thác (elastic).</p>
            </div>

            </section>
    `
  }
];

// ==========================================
// Dữ liệu cho Section 2
// ==========================================
const section2Data = [
  {
    isRawHtml: true,
    content: String.raw`
      <!-- COPY TOÀN BỘ NỘI DUNG TỪ BÊN TRONG THẺ <main> CỦA SECTION 2 TỪ FILE GỐC VÀ PASTE VÀO ĐÂY -->
    `
  }
];

// ==========================================
// Dữ liệu cho Section 3
// ==========================================
const section3Data = [
  {
    isRawHtml: true,
    content: String.raw`
      <!-- COPY TOÀN BỘ NỘI DUNG TỪ BÊN TRONG THẺ <main> CỦA SECTION 3 TỪ FILE GỐC VÀ PASTE VÀO ĐÂY -->
    `
  }
];

// ==========================================
// Dữ liệu cho Section 4
// ==========================================
const section4Data = [
  {
    isRawHtml: true,
    content: String.raw`
      <!-- COPY TOÀN BỘ NỘI DUNG TỪ BÊN TRONG THẺ <main> CỦA SECTION 4 TỪ FILE GỐC VÀ PASTE VÀO ĐÂY -->
    `
  }
];
