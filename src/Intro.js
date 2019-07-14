import React, { Component } from 'react';
import './Intro.css';

class Intro extends Component {
    render() {
        return (
            <section id="intro">
                <div class="page-title"><h1>썸데이톡</h1></div>
                <div class="content">
                    <p>
                        회사가 아닌 <span class="span-red-big">공정무역 영어 공부</span> 모임입니다.<br/>
                        모든 수업료는 한국 자원 봉사자들이 모아 전액 필리핀으로 송금합니다. 커미션은 없습니다.
                    </p><br/>
                    <p>
                        회사가 아니니 수강증, 출럭증, 현금영수증과 같은 서류 발급을 공식적으로 할 수 없습니다.
                        하지만 <span class="span-blue">일부 회사는 수강증, 출석증을 제출하면 어학비 지원이 가능하다고 합니다.</span>
                        확인해보시고 가능하면 연락해주세요.
                    </p><br/>
                    <p>
                        가능한 회사 : Naver, NBP, Camp Mobile, Telit
                    </p>
                </div>
            </section>
        );
    }
}

export default Intro